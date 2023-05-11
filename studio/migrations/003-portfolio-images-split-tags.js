import client from "@sanity/client";
import groq from "groq";

const migrateNextBatch = async () => {
  const documents = await client.fetch(
    groq`*[_type == 'portfolioImage' && defined(caption)] {_id, _rev, tags}`
  );

  const labels = ["3D Renderings", "Banquette", "Bar", "Island"];
  const rooms = ["Bath", "Kitchen", "Laundry", "Office"];

  const patches = documents.map((doc) => {
    return {
      id: doc._id,
      patch: {
        set: {
          labels: doc.tags.filter((tag) =>
            labels.some((label) => label === tag)
          ),
          room: doc.tags.filter((tag) =>
            rooms.some((label) => label === tag)
          )[0],
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
