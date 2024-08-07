require("dotenv").config();

const fs = require("fs");
const inquirer = require("inquirer");
const mkdirp = require("mkdirp");
const path = require("path");
const { createClient } = require("@sanity/client");
const sanityExport = require("@sanity/export");
const sanityImport = require("@sanity/import");

process.on("unhandledRejection", (error) => {
  throw error;
});

async function main() {
  const { SANITY_PROJECT_ID, SANITY_WRITE_TOKEN } = process.env;

  if (!SANITY_PROJECT_ID || !SANITY_WRITE_TOKEN) {
    throw new Error("Missing SANITY_WRITE_TOKEN or SANITY_PROJECT_ID");
  }

  const {
    assets,
    documentTypes,
    drafts,
    exportDataset,
    hasConfirmed,
    importDataset,
    raw,
  } = await inquirer.prompt([
    {
      type: "list",
      name: "exportDataset",
      message: "What is the source dataset?",
      choices: ["development", "production"],
    },
    {
      type: "list",
      name: "importDataset",
      message: "What is the destination dataset?",
      choices: ({ exportDataset }) =>
        ["development", "production"].filter(
          (value) => value !== exportDataset
        ),
    },
    {
      type: "checkbox",
      name: "documentTypes",
      message: "What documents should be migrated?",
      choices: [
        "album",
        "carousel",
        "certification",
        "clientReview",
        "designer",
        "designPreview",
        "portfolioImage",
        "servicesPage",
        "siteSettings",
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one document type.";
        }

        return true;
      },
    },
    {
      type: "confirm",
      name: "assets",
      default: false,
      message: "Would you like to migrate assets?",
    },
    {
      type: "confirm",
      name: "raw",
      default: true,
      message:
        "Export documents only, without downloading or rewriting asset references?",
    },
    {
      type: "confirm",
      name: "drafts",
      default: true,
      message: "Would you like to migrate drafts?",
    },
    {
      type: "confirm",
      name: "hasConfirmed",
      message: ({ exportDataset, importDataset }) =>
        `Migrating from ${exportDataset} to ${importDataset}. Are the above settings correct?`,
    },
  ]);

  if (!hasConfirmed) {
    console.log("Migration aborted");
    process.exit();
  }

  const exportClient = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: exportDataset,
    token: SANITY_WRITE_TOKEN,
    useCdn: false,
    apiVersion: "v1",
  });

  const importClient = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: importDataset,
    token: SANITY_WRITE_TOKEN,
    useCdn: false,
    apiVersion: "v1",
  });

  const timeStamp = new Date().toISOString();
  const outputDirectory = path.join(__dirname, "..", "backup");

  const outputPath = path.join(
    outputDirectory,
    `${timeStamp}-${exportDataset}.tar.gz`
  );

  await mkdirp(outputDirectory);

  await sanityExport({
    client: exportClient,
    dataset: exportDataset,
    types: documentTypes,
    outputPath,
    assets,
    raw,
    drafts,
    onProgress: ({ step, total, current }) =>
      console.log(step, current && total ? `${current} of ${total}` : ""),
  });

  const { numDocs, warnings } = await sanityImport(
    fs.createReadStream(outputPath),
    {
      client: importClient,
      operation: "createOrReplace",
      allowFailingAssets: true,
      replaceAssets: true,
    }
  );

  console.log("Migrated %d documents", numDocs);
  if (warnings.length) {
    console.warn("Warning: \n\t", warnings.join("\n\t"));
  }
}

main();
