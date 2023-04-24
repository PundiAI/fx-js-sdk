# @functionx_io/fx-js-sdk

[![npm version](https://img.shields.io/npm/v/@functionx_io/fx-js-sdk.svg)](https://www.npmjs.com/package/@functionx_io/fx-js-sdk)

## Install

```shell
npm install @functionx_io/fx-js-sdk
```

## Usage

```js
import { FxSDK } from '@functionx_io/fx-js-sdk';
```

## Development

### Install dependencies

```shell
yarn install
```

### Build

```shell
yarn build
```

## Build proto

```shell
git submodule update --init --recursive --remote
yarn codegen
```

### Test

```shell
wget https://raw.githubusercontent.com/functionx/fx-core/main/develop/run_fxcore.sh
chmod +x run_fxcore.sh
export FX_DEBUG=true ./run_fxcore.sh init
yarn test
```

## License

[Apache License 2.0](LICENSE)
