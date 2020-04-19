# Bluebird

Monorepo for Bluebird Cabinetry and Design

## Packages

### [Web](web/README.md)

React front-end for Bluebird Cabinetry and Design

### [Studio](studio/README.md)

Sanity.io data studio for Bluebird Cabinetry and Design

## Contributing

By default `studio` is configured to use the `development` dataset in your local environment. Be sure `development.env` in the `web` package is set to build the `development` dataset.

Example `web/development.env`
```
# web/development.env
GATSBY_SANITY_PROJECT_ID="{ PROJECT_ID }"
GATSBY_SANITY_DATASET="development"
```

### `Schema` changes

When you make changes to the `studio/schemas/schema.js`, changes will not reflect in the `web` `ui` until you run a graphql publish.

```
cd studio
npx sanity graphql deploy --dataset development
```

> NOTE: It does not matter if you do or do not publish the playground. Gatsby is configured on the `web` side to deploy it's own `graphql` playground at http://localhost:8000/__graphql

## Commands

### `npm start`

Start the development server.

### `npm test`

Start the test runner.

### `npm run lint`

Lint JavaScript and CSS files.
