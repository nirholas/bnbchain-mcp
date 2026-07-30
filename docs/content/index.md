# BNB-Chain-MCP

> **A Model Context Protocol server for BNB Chain and EVM-compatible networks.**

Enable AI agents to interact with any EVM blockchain through natural language. Supports BSC, opBNB, Arbitrum, Ethereum, Polygon, Base, Optimism, and more.

**Supported Networks:**

- **BNB Smart Chain (BSC)**
- **opBNB** - Layer 2 for BNB Chain
- **Arbitrum One**
- **Ethereum**
- **Polygon**
- **Base**
- **Optimism**
- **+ All testnets**

---

## 📚 Documentation Sections

<div class="grid cards" markdown>

-   :material-robot:{ .lg .middle } **MCP Server**

    ---

    Tools, resources, and setup for AI agents

    [:octicons-arrow-right-24: MCP Documentation](mcp-server/index.md)

-   :material-swap-horizontal:{ .lg .middle } **Swap/DEX**

    ---

    Token swaps via DEX aggregators

    [:octicons-arrow-right-24: Swap Tools](mcp-server/tools.md)

-   :material-bridge:{ .lg .middle } **Bridge**

    ---

    Cross-chain transfers

    [:octicons-arrow-right-24: Bridge Tools](mcp-server/tools.md)

-   :material-shield-check:{ .lg .middle } **Security**

    ---

    Token safety & contract verification

    [:octicons-arrow-right-24: Security Tools](mcp-server/tools.md)

</div>

---

## Features

🔄 **Swap/DEX** - Get quotes, execute swaps, add/remove liquidity, arbitrage detection

🌉 **Bridge** - Cross-chain transfers via LayerZero, Stargate, Wormhole, Across

⛽ **Gas** - Gas prices across chains, EIP-1559 suggestions, cost estimation

📦 **Multicall** - Batch read/write operations, multi-token balances

📊 **Events/Logs** - Query historical events, decode logs, filter by topic

🔒 **Security** - Rug pull detection, honeypot analysis, contract permissions, holder distribution

💰 **Staking** - Liquid staking (Lido stETH/wstETH), LP farming, reward claiming

✍️ **Signatures** - Sign messages, verify signatures, EIP-712 typed data

🏦 **Lending** - Aave/Compound: supply, borrow, repay, flash loans, liquidations

📈 **Price Feeds** - Historical prices, TWAP, Chainlink oracles

📁 **Portfolio** - Track holdings across chains

🏛️ **Governance** - Create proposals, vote, delegate, queue/execute proposals

🎨 **NFTs** - Marketplace approvals, batch transfers, metadata fetching

🆔 **ENS** - Register domains, set records, create subdomains, transfers

🛡️ **MEV Protection** - Private transactions via Flashbots, MEV exposure analysis

📜 **Contracts** - Deploy, CREATE2, proxy deployment, upgrades, verification

📰 **News** - Latest crypto news, DeFi updates, Bitcoin news

📁 **Portfolio** - Track holdings across chains

🏛️ **Governance** - Snapshot votes, on-chain proposals

---

## Quick Start

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bnb-chain-mcp": {
      "command": "npx",
      "args": ["-y", "@nirholas/bnbchain-mcp@latest"],
      "env": {
        "PRIVATE_KEY": "your_private_key_here (optional)"
      }
    }
  }
}
```

### Cursor

Add to your MCP settings:

```json
{
  "mcpServers": {
    "bnb-chain-mcp": {
      "command": "npx",
      "args": ["-y", "@nirholas/bnbchain-mcp@latest"],
      "env": {
        "PRIVATE_KEY": "your_private_key_here (optional)"
      }
    }
  }
}
```

---

## Links

- 🐦 [Twitter](https://x.com/nichxbt)
- 💻 [GitHub](https://github.com/nirholas/bnb-chain-mcp)

---

## Credits

Built by **[nich](https://x.com/nichxbt)** ([:material-github: nirholas](https://github.com/nirholas))

**Related Projects:**

- [sperax-crypto-mcp](https://github.com/nirholas/sperax-crypto-mcp) - Sperax Protocol MCP
