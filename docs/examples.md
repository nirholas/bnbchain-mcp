# bnbchain-mcp examples

Model Context Protocol (MCP) server for BNB Chain - BSC EVM and Greenfield decentralized storage

## Example 1

```text
<h1>BNB Chain MCP Server</h1>

<p><strong>The most comprehensive Model Context Protocol server for BNB Chain & EVM blockchains</strong></p>

<p>Enable AI agents to interact with BNB Chain, opBNB, and other EVM networks through natural language</p>
[![MCP](https://img.shields.io/badge/MCP-Compatible-purple?style=flat-square)](https://modelcontextprotocol.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![BNB Chain](https://img.shields.io/badge/BNB_Chain-Native-F0B90B?style=flat-square&logo=binance)](https://www.bnbchain.org)

<br/>

[![BNB Chain](https://img.shields.io/badge/BNB_Chain-F0B90B?style=for-the-badge&logo=binance&logoColor=white)](https://www.bnbchain.org)
[![opBNB](https://img.shields.io/badge/opBNB-F0B90B?style=for-the-badge&logo=binance&logoColor=white)](https://opbnb.bnbchain.org)

<br/>

<!-- Animated Demo -->
<img src="assets/demo.svg" alt="BNB Chain MCP Demo" width="800">

<br/><br/>

> ⭐ **If you find this useful, please star the repo!** It helps others discover this project.

<br/>

[📖 Documentation](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app) • [🚀 Quick Start](#-quick-start) • [🛠️ Features](#-features-overview) • [📊 Roadmap](#️-roadmap) • [🤝 Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [What is BNB Chain MCP?](#-what-is-bnb-chain-mcp)
- [Quick Start](#-quick-start)
- [Features Overview](#-features-overview)
- [Supported Networks](#-supported-networks)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Data Sources](#-data-sources)
- [Example Conversations](#-example-conversations)
- [Architecture](#-architecture)
- [Roadmap](#️-roadmap)
- [Related MCP Servers](#-related-mcp-servers)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 What is BNB Chain MCP?

**BNB Chain MCP** is a Model Context Protocol (MCP) server optimized for BNB Chain and opBNB, while also supporting other EVM-compatible blockchains. It enables AI assistants like Claude, ChatGPT, and Cursor to interact with blockchain networks through natural language.

### Why BNB Chain MCP?
```

## Example 2

```text
### Key Benefits

| Benefit | Description |
|---------|-------------|
| **Natural Language** | Ask questions in plain English, get blockchain data instantly |
| **Multi-Chain** | One server supports 10+ EVM networks simultaneously |
| **Read + Write** | Query data or execute transactions (with wallet) |
| **Security Built-In** | GoPlus integration for token/contract safety checks |
| **Rich Data** | Prices, DEX pools, TVL, social sentiment, news & more |
| **AI-Native** | Built specifically for LLMs with structured responses |

### Use Cases

<details>
<summary><strong>🔍 Research & Analysis</strong></summary>

- Check token prices and historical data
- Analyze DEX liquidity pools
- Monitor protocol TVL and metrics
- Research new tokens before investing
- Track whale wallets and movements

</details>

<details>
<summary><strong>💹 Trading & DeFi</strong></summary>

- Get swap quotes across DEX aggregators
- Find best yield farming opportunities
- Monitor lending rates on Aave/Compound
- Execute token swaps and transfers
- Bridge tokens across chains

</details>

<details>
<summary><strong>🛡️ Security & Compliance</strong></summary>

- Detect honeypot tokens
- Check for rug pull risks
- Verify smart contract safety
- Screen wallet addresses
- Check token holder distribution

</details>

<details>
<summary><strong>👨‍💻 Development</strong></summary>

- Deploy and verify smart contracts
- Query contract state and events
- Test transactions before execution
- Manage multi-sig operations
- Debug failed transactions

</details>

<br/>

<div align="center">
  <img src="assets/demo-defi.svg" alt="BNB Chain MCP DeFi Demo" width="800">
  <p><em>DeFi tools in action: swap quotes, TVL tracking, and more</em></p>
</div>

---

## 🚀 Quick Start

Get up and running in under 60 seconds!

### Option 1: Claude Desktop (Recommended)

Add to your `claude_desktop_config.json`:
```

## Example 3

```text
<details>
<summary>📁 Config file locations</summary>

| OS | Path |
|----|------|
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **Linux** | `~/.config/claude/claude_desktop_config.json` |

</details>

### Option 2: Cursor / VS Code

Add to your MCP settings:
```

## Example 4

```text
### Option 3: ChatGPT Developer Mode

1. Enable [Developer Mode](https://chatgpt.com/#settings/Connectors/Advanced) in ChatGPT settings
2. Start the HTTP server:
```

## Example 5

```text
3. In ChatGPT Settings → Apps, click **Create app**
4. Enter your server URL: `http://localhost:3001/mcp`
5. Select the app in conversations via **Developer mode** menu

📖 [Full ChatGPT Setup Guide](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/mcp-server/chatgpt-setup/)

### Option 4: npx Instant Start
```

## Example 6

```text
---

## 🛠️ Features Overview

### Feature Matrix

| Category | Features | Status |
|----------|----------|--------|
| **Swap/DEX** | Token swaps via 1inch, 0x, ParaSwap | ✅ |
| **Bridge** | Cross-chain transfers via LayerZero, Stargate | ✅ |
| **Gas** | Gas prices across chains, EIP-1559 suggestions | ✅ |
| **Multicall** | Batch read/write operations | ✅ |
| **Events/Logs** | Query historical events, decode logs | ✅ |
| **Security** | Rug pull detection, honeypot check, GoPlus integration | ✅ |
| **Staking** | Liquid staking (Lido), LP farming | ✅ |
| **Signatures** | Sign messages, verify signatures, EIP-712 | ✅ |
| **Lending** | Aave/Compound positions, borrow rates | ✅ |
| **Price Feeds** | Historical prices, TWAP, oracle aggregation | ✅ |
| **Portfolio** | Track holdings across chains | ✅ |
| **Governance** | Snapshot votes, on-chain proposals | ✅ |
| **Deployment** | Deploy contracts, CREATE2, upgradeable proxies | ✅ |
| **MEV Protection** | Flashbots Protect, private transactions | ✅ |
| **ENS/Domains** | Register, transfer, renew, set records | ✅ |
| **Market Data** | CoinGecko prices, OHLCV, trending | ✅ |
| **DeFi Analytics** | DefiLlama TVL, yields, fees, protocols | ✅ |
| **Social Sentiment** | LunarCrush metrics, influencers, trending | ✅ |
| **DEX Analytics** | GeckoTerminal pools, trades, OHLCV | ✅ |

### Tool Categories

<details>
<summary><strong>🔗 Core Blockchain (45+ tools)</strong></summary>

| Tool | Description |
|------|-------------|
| `get_chain_info` | Get chain ID, block number, gas price |
| `get_block` | Get block by number or hash |
| `get_transaction` | Get transaction details and receipt |
| `send_transaction` | Send native token transfer |
| `estimate_gas` | Estimate gas for transaction |
| `get_balance` | Get native/token balance |
| `call_contract` | Call view/pure contract functions |
| ... | [See full list →](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/tools/blockchain) |

</details>

<details>
<summary><strong>💰 Token Operations (30+ tools)</strong></summary>

| Tool | Description |
|------|-------------|
| `get_token_info` | Get name, symbol, decimals, supply |
| `get_token_balance` | Get token balance for address |
| `transfer_token` | Transfer ERC-20 tokens |
| `approve_token` | Approve spending allowance |
| `get_nft_metadata` | Get NFT metadata and traits |
| `transfer_nft` | Transfer ERC-721 NFT |
| ... | [See full list →](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/tools/tokens) |

</details>

<details>
<summary><strong>🏦 DeFi (50+ tools)</strong></summary>

| Tool | Description |
|------|-------------|
| `get_swap_quote` | Get swap quote from DEX aggregators |
| `execute_swap` | Execute token swap |
| `add_liquidity` | Add liquidity to DEX pools |
| `get_lending_rates` | Get Aave/Compound rates |
| `supply_to_lending` | Supply assets to lending protocol |
| `get_farming_apy` | Get yield farming APY |
| ... | [See full list →](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/tools/defi) |

</details>

<details>
<summary><strong>🔒 Security (15+ tools)</strong></summary>

| Tool | Description |
|------|-------------|
| `check_token_security` | GoPlus token security analysis |
| `detect_honeypot` | Check if token is honeypot |
| `check_rug_pull` | Assess rug pull risk |
| `get_holder_distribution` | Get top holder breakdown |
| `check_contract_verified` | Verify contract source |
| `screen_address` | Check address risk score |
| ... | [See full list →](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/tools/security) |

</details>

<details>
<summary><strong>📊 Market Data (25+ tools)</strong></summary>

| Tool | Description |
|------|-------------|
| `get_price` | Get current token price |
| `get_price_history` | Get historical OHLCV data |
| `get_trending_coins` | Get trending tokens |
| `get_tvl` | Get protocol TVL from DefiLlama |
| `get_dex_pools` | Get DEX pool data |
| `get_social_metrics` | Get LunarCrush sentiment |
| ... | [See full list →](https://bnbchain-mcp-docs-lp642k3kpa-uc.a.run.app/tools/market-data) |

</details>

---

## 🌐 Supported Networks

| Network | Chain ID | Native Token | Status |
|---------|----------|--------------|--------|
| **BNB Smart Chain** | 56 | BNB | ✅ Full Support |
| **opBNB** | 204 | BNB | ✅ Full Support |
| **Arbitrum One** | 42161 | ETH | ✅ Full Support |
| **Ethereum** | 1 | ETH | ✅ Full Support |
| **Polygon** | 137 | MATIC | ✅ Full Support |
| **Base** | 8453 | ETH | ✅ Full Support |
| **Optimism** | 10 | ETH | ✅ Full Support |
| **Avalanche C-Chain** | 43114 | AVAX | ✅ Full Support |
| **Fantom** | 250 | FTM | ✅ Full Support |
| **Gnosis** | 100 | xDAI | ✅ Full Support |
| **BSC Testnet** | 97 | tBNB | ✅ Testnet |
| **Sepolia** | 11155111 | SepoliaETH | ✅ Testnet |
| **Goerli** | 5 | GoerliETH | ✅ Testnet |

### Adding Custom Networks
```

## Example 7

```text
---

## 📦 Installation

### Server Modes

| Mode | Command | Use Case |
|------|---------|----------|
| **stdio** | `npx @nirholas/bnbchain-mcp` | Claude Desktop, Cursor |
| **HTTP** | `npx @nirholas/bnbchain-mcp --http` | ChatGPT Developer Mode |
| **SSE** | `npx @nirholas/bnbchain-mcp --sse` | Legacy HTTP clients |

### From npm (Recommended)
```

## Example 8

```text
### From Source
```


Every snippet above is taken from the [repository documentation](https://github.com/nirholas/bnbchain-mcp#readme).
