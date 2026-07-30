/**
 * @author Nich
 * @website x.com/nichxbt
 * @github github.com/nirholas
 * @license MIT
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    lib: 'src/lib.ts',
    index: 'src/index.ts'
  },
  format: ['esm'],
  outDir: 'build',
  banner: {
    // Bundled CJS dependencies expect the CommonJS ambient bindings that
    // esbuild's ESM output does not provide: require() for node builtins, and
    // __filename/__dirname for module-relative path math.
    js: [
      "import { createRequire as __cjsCreateRequire } from 'node:module';",
      "import { fileURLToPath as __cjsFileURLToPath } from 'node:url';",
      "import { dirname as __cjsDirname } from 'node:path';",
      "const require = __cjsCreateRequire(import.meta.url);",
      "const __filename = __cjsFileURLToPath(import.meta.url);",
      "const __dirname = __cjsDirname(__filename);"
    ].join(' ')
  },
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  // Note: @bnb-chain/greenfield-js-sdk and @bnb-chain/greenfield-cosmos-types
  // are intentionally NOT external: their published ESM dist uses extensionless
  // relative imports that Node's ESM loader rejects, so they must be bundled.
  // @bnb-chain/reed-solomon must stay external: its node adapter spawns worker
  // files resolved via __dirname inside its own package directory.
  noExternal: [
    '@bnb-chain/greenfield-js-sdk',
    '@bnb-chain/greenfield-cosmos-types'
  ],
  external: [
    '@modelcontextprotocol/sdk',
    '@bnb-chain/reed-solomon',
    'viem',
    'zod',
    'express',
    'cors',
    'dotenv',
    // This package's own source needs mime v4 (named Mime export plus the
    // mime/types/* subpaths), while superagent, reached through the bundled
    // greenfield SDK, calls the mime v2 `define` API. Bundling superagent
    // rewrites its require('mime') to this external v4 and crashes on boot,
    // so superagent stays external and resolves its own nested mime@2.
    'mime',
    'superagent',
    // Emscripten builds reached through @cosmjs/crypto. Their Node loader does
    // module-relative asset resolution, so they must load from node_modules as
    // real CommonJS rather than be inlined into the bundle.
    'libsodium-sumo',
    'libsodium-wrappers-sumo',
    'reflect-metadata'
  ]
})
