/**
 * @author Nich
 * @website x.com/nichxbt
 * @github github.com/nirholas
 * @license MIT
 */
import type { Hex } from "viem"
import { z } from "zod"

// Get default private key from environment variables, use sample key if not set
export const DEFAULT_PRIVATE_KEY = process.env.PRIVATE_KEY || ""

// Common parameters
export const networkParam = z
  .enum(["testnet", "mainnet"])
  .optional()
  .default("testnet")
  .describe("Network name (e.g. 'testnet', 'mainnet'). Defaults to testnet.")

// The environment key is applied after parsing so it never appears in the published tool schema.
export const privateKeyParam = z
  .string()
  .describe(
    "Private key of the account in hex format. SECURITY: This is used only for transaction signing."
  )
  .optional()
  .transform((value) => value ?? DEFAULT_PRIVATE_KEY)

export const bucketNameParam = z
  .string()
  .optional()
  .default("created-by-universal-crypto-mcp")
  .describe(
    "The bucket name to use. If not provided, will use default 'created-by-universal-crypto-mcp'"
  )
