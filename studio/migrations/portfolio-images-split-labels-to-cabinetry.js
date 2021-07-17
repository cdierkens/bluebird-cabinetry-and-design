import groq from "groq";
import sanityClient from "part:@sanity/base/client";

const client = sanityClient.withConfig({ apiVersion: "v1" });

const migrateNextBatch = async () => {
  const documents = await client.fetch(
    groq`*[_type == 'portfolioImage' && defined(labels)] {_id, _rev, labels}`
  );

  const isCabinetry = (value) => value.toLowerCase().indexOf("cabinetry") > -1;

  const patches = documents.map((doc) => {
    return {
      id: doc._id,
      patch: {
        set: {
          labels: doc.labels.filter((label) => !isCabinetry(label)),
          cabinetry: doc.labels.filter((label) => isCabinetry(label)),
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
