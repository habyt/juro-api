# 📑 Client API for Juro

This client is intended to access [Juro](https://juro.com/) in a type safe manner.
[The API doc description](https://api-docs.juro.com/)


+1: it contains the OpenAPI specification of the Juro API, so you can easily build your own client - if you publish your package with the help of the spec, maybe mention this package as origin. 🍻


## Prerequisites
The package is using the `fetch` API, hence you need to provide it with one of the followings:
- use node version `> 18` - recommended
- use `--experimental-fetch` on node version `>16.15.0`
- install `node-fetch`


## Working with this project

- Install the package: `npm install` / `yarn install`
- Execute the tests: `npm run test` / `yarn test`
- Check linter errors: `npm run lint` / `yarn lint`
- Fix linter errors: `npm run lint:fix`  /`yarn run lint:fix`
- Regenerate the API defs from the open-api specs: `npm run generate` / `yarn generate`

## Examples
```
import { Juro } from '@habyt/juro-api';

const juro = Juro('your-juro-api-key');
const result = await juro.health.healthCheck(); //result is { message: 'ok' }
```
