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

## .vscode/settings.json

[settings.json](.vscode/settings.json) configures VSCode to use the same TypeScript version as the project (see [docs](https://basarat.gitbook.io/typescript/getting-started).

# DefinitelyTyped

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) is a repository of TypeScript type mappings for popular JavaScript packages.  Search for your package using [TypeSearch](https://microsoft.github.io/TypeSearch/).

## TypeScript Declaration Files

* [Creating high-quality TypeScript Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
* [Library Structures](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
* [Writing Declaration Files for @types](https://devblogs.microsoft.com/typescript/writing-dts-files-for-types/)

## Mocha.js

* [json-stream reporter](https://mochajs.org/#json-stream)

## Links

* [TypeScript book](https://basarat.gitbook.io/typescript/)
* [Unit testing node applications with TypeScript — using mocha and chai](https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2)
* [HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
* [Change default timeout for mocha](https://stackoverflow.com/questions/23492043/change-default-timeout-for-mocha)
* [Changes to How We Manage DefinitelyTyped](https://devblogs.microsoft.com/typescript/changes-to-how-we-manage-definitelytyped/)
* [vo](https://github.com/matthewmueller/vo) - Minimalist, yet complete control flow library.
* [Generator: function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
* [Node.js + Typescript + Nightmare](https://medium.com/@franperez/node-js-typescript-nightmare-c163fe3bed13)
* [Mocha.js](https://mochajs.org/#installation)