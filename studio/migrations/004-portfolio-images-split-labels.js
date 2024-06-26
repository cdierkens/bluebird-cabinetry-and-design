import sanityClient from "@sanity/client";
import groq from "groq";

const client = sanityClient.withConfig({ apiVersion: "v1" });

const migrateNextBatch = async () => {
  const documents = await client.fetch(
    groq`*[_type == 'portfolioImage' && defined(labels)] {_id, _rev, labels}`
  );

  const isCabinetry = (value) => value.toLowerCase().indexOf("cabinetry") > -1;
  const isFinish = (value) => value.toLowerCase().indexOf("finish") > -1;

  const upperCase = (value) => `${value[0].toUpperCase()}${value.slice(1)}`;

  const remove = [
    "Stacked",
    "Integral Panel Ends",
    "Non Functional Door Ends",
    "Vanity Custom",
    "Furniture Valance",
  ];

  const patches = documents.map((doc) => {
    return {
      id: doc._id,
      patch: {
        set: {
          labels: doc.labels
            .filter(
              (label) =>
                !isCabinetry(label) &&
                !isFinish(label) &&
                !remove.includes(label)
            )
            .map(upperCase),
          cabinetry: doc.labels
            .filter((label) => isCabinetry(label) && !remove.includes(label))
            .map((value) => value.replace(/\sCabinetry/, "")),
          finish: doc.labels
            .filter((label) => isFinish(label) && !remove.includes(label))
            .map((value) => value.replace(/\sFinish/, "")),
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
