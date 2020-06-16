## Requirements

* [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager, POSIX-compliant bash script to manage multiple active node.js versions
* [typescript](https://www.typescriptlang.org/#download-links) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Installing

* Installing TypeScript: `npm install -g typescript`

## tsconfig.json

Current options in [tsconfig.json](tsconfig.json):

* `"target": "es5"` - compile to ES5 (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_tsconfigjson))
* `"module": "commonjs"` - use [CommonJS](http://www.commonjs.org/specs/modules/1.0) modules
* `"outDir": "out"` - put compiled JavaScript files in the `out` directory (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_change-the-build-output))
* `"sourceMap": true` - supports debugging (see [docs](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_debugging))