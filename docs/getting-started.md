# Getting started with bnbchain-mcp

Model Context Protocol (MCP) server for BNB Chain - BSC EVM and Greenfield decentralized storage

## Install

```bash
npm install @nirholas/bnbchain-mcp
```

## Verify the install

Clone the repository and run its checks to confirm everything works on your machine:

```bash
git clone https://github.com/nirholas/bnbchain-mcp.git
cd bnbchain-mcp
```

Available commands:

| Command | Runs |
|---|---|
| `npm run build` | `tsup` |
| `npm run dev` | `ts-node src/index.ts` |
| `npm run start` | `node build/index.js` |
| `npm run test` | `vitest` |
| `npm run lint` | `eslint src/` |
| `npm run typecheck` | `tsc --noEmit` |

## Next steps

- [Examples](./examples.md) shows runnable snippets.
- The [README](https://github.com/nirholas/bnbchain-mcp#readme) is the complete reference.
- Found a problem? [Open an issue](https://github.com/nirholas/bnbchain-mcp/issues).
