import groq from "groq";
import client from "part:@sanity/base/client";

const migrateNextBatch = async () => {
  const documents = await client.fetch(
    groq`*[_type == 'portfolioImage' && defined(caption)] {_id, _rev, caption}`
  );

  const patches = documents.map((doc) => {
    // const captionMap = Object.fromEntries(
    //   doc.caption
    //     .split(/-/)
    //     .map((s) => s.trim())
    //     .map((value) => value.split(/:/).map((s) => s.trim()))
    // );

    const captionMap = doc.caption.split("-").reduce((result, current) => {
      const [property, value] = current.split(":").map((item) => item.trim());

      return {
        ...result,
        [property]: value,
      };
    }, {});

    return {
      id: doc._id,
      patch: {
        set: {
          contractor: captionMap["Contractor"],
          interiorDesigner:
            captionMap["Interior Designer"] || captionMap["Interior Designers"],
          furnitureRefinishing: captionMap["Furniture Refinishing"],
          decorator: captionMap["Decorator"],
          ...(doc.caption === "2020 Design Software"
            ? { software: "2020 Design Software" }
            : {}),
        },
        ifRevisionID: doc._rev,
      },
    };
  });

  if (patches.length === 0) {
    console.log("No more documents to migrate!");
    return null;
  }

  console.log(
    `Migrating batch:\n %s`,
    patches
      .map((patch) => `${patch.id} => ${JSON.stringify(patch.patch, null, 2)}`)
      .join("\n")
  );

  const transaction = patches.reduce(
    (tx, patch) => tx.patch(patch.id, patch.patch),
    client.transaction()
  );

  await transaction.commit();
};

console.log(`Migrating dataset: ${client.config().dataset}`);
migrateNextBatch().catch((err) => {
  console.error(err);
  process.exit(1);
});
