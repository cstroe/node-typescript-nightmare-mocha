## Requirements

* [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager, POSIX-compliant bash script to manage multiple active node.js versions
* [typescript](https://www.typescriptlang.org/#download-links) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Installing

* Installing [TypeScript](https://www.typescriptlang.org/): `npm install -D typescript`
* Installing [ts-node](https://github.com/TypeStrong/ts-node): `npm install -D ts-node` - allows running TypeScript files directly from the command line

## tsconfig.json

The [tsconfig.json](tsconfig.json) file customizes configures various behaviors of the TypeScript compiler:

* `"target": "es5"` - compile to ES5 (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_tsconfigjson))
* `"module": "commonjs"` - use [CommonJS](http://www.commonjs.org/specs/modules/1.0) modules
* `"outDir": "out"` - put compiled JavaScript files in the `out` directory (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_change-the-build-output))
* `"sourceMap": true` - supports debugging (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_debugging))