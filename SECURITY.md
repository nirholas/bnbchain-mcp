# Security Policy

## Overview

bnbchain-mcp: Developer tools for AI crypto agents  🛠️ Build apps with DeFi trading, DEX swaps, smart contract deployment, token operations, staking, bridging, wallet automation, honeypot detection, security analysis, price oracles, market data & protocol analytics on BSC and opBNB

## Reporting a Vulnerability

If you discover a security issue, please report it responsibly:

1. **Do NOT** open a public issue
2. Email the maintainer or open a private security advisory on GitHub
3. Include steps to reproduce the vulnerability
4. Allow reasonable time for a fix before disclosure

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | ✅        |

## Known upstream advisories

`npm audit` reports findings against this package that originate entirely in
BNB Chain's own published packages. They are recorded here because they
cannot be remediated from this repository, and a reader who runs `npm audit`
deserves to know which findings are actionable and which are not.

| Advisory | Severity | Reaches us through | Status |
| --- | --- | --- | --- |
| `protobufjs` <=7.6.2 | critical | `@bnb-chain/greenfield-js-sdk` -> `@bnb-chain/greenfield-cosmos-types` (pins `protobufjs ~6.11.4`) and `@confio/ics23` (pins `^6.8.8`) | Unfixable downstream |
| `lodash.set` | high | `@bnb-chain/greenfield-js-sdk` | No patched release exists |
| `@cosmjs/*`, `@confio/ics23` | high | `@bnb-chain/greenfield-js-sdk` | Awaiting upstream |

Three remediations were tried and rejected, each for a concrete reason:

1. **`overrides` in this package.** npm applies `overrides` only from the
   root project of an install. A library's own `overrides` are ignored when
   somebody installs it as a dependency, so this fixes local development and
   nothing that ships.
2. **Declaring `protobufjs` as a direct dependency.** Verified against a real
   consumer install: the patched 7.6.5 hoists to the top level while
   `@bnb-chain/greenfield-cosmos-types` and `@confio/ics23` keep a nested
   `protobufjs@6.11.6`, because a `~6.11.4` range cannot accept a 7.x
   release. The advisory count does not move and the package gains a
   dependency it never imports.
3. **Upgrading the upstream SDK.** The newest
   `@bnb-chain/greenfield-cosmos-types` (0.4.0) still pins `protobufjs
   ~6.11.2`, so no available version escapes the chain.

The fix has to land in `@bnb-chain/greenfield-cosmos-types` and
`@confio/ics23`. Until it does, treat Greenfield calls made through this
server as carrying the upstream protobufjs advisory.
