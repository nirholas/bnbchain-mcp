# Documentation Site Deployment

The documentation at [bnbchain-mcp.modelcontextprotocol.name](https://bnbchain-mcp.modelcontextprotocol.name) is a MkDocs Material site hosted on Cloudflare Pages.

| Item | Value |
|------|-------|
| Host | Cloudflare Pages, project `bnbchain-mcp-docs` |
| Production URL | `https://bnbchain-mcp.modelcontextprotocol.name` |
| Security headers | `docs/content/_headers` (copied into the build) |
| DNS | Proxied CNAME in the `modelcontextprotocol.name` Cloudflare zone, pointing to `bnbchain-mcp-docs.pages.dev` |

## Build

```bash
pip install mkdocs-material 'mkdocstrings[python]' pymdown-extensions
cd docs
mkdocs build            # output: docs/site/
```

## Deploy

Export `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, then run from the repository root:

```bash
npx wrangler@4 pages deploy docs/site --project-name=bnbchain-mcp-docs --branch=main
```

Deploys are manual. GitHub Actions is not used for this site.

## Verify

```bash
curl -sI https://bnbchain-mcp.modelcontextprotocol.name | head -1   # HTTP/2 200
```

## Rollback

In the Cloudflare dashboard, open **Workers & Pages → bnbchain-mcp-docs → Deployments**.
Pick an earlier production deployment and select **Rollback to this deployment**.
