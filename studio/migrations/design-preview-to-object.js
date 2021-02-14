import groq from "groq";
import client from "part:@sanity/base/client";

// Run this script with: `sanity exec --with-user-token migrations/design-preview-to-object.js`

const migrateNextBatch = async () => {
  const documents = await client.fetch(
    groq`*[_type == 'designPreview']{ _id, images[]->{...}}`
  );

  const patches = documents.map((doc) => {
    return {
      id: doc._id,
      patch: {
        set: {
          images: doc.images.map((image) => ({
            _type: "designPreviewImage",
            ...image,
          })),
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
