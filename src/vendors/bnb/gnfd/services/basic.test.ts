/**
 * @author Nich
 * @website x.com/nichxbt
 * @github github.com/nirholas
 * @license MIT
 */
import "reflect-metadata"

import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { NodeAdapterReedSolomon } from "@bnb-chain/reed-solomon/node.adapter"
import { expect, test, vi } from "vitest"

import { getMimeType } from "../util"

vi.setConfig({ testTimeout: 50000 })
const fileName = fileURLToPath(import.meta.url)

test("test get mime type", async () => {
  expect(getMimeType(fileName)).toBe("application/javascript")
  expect(getMimeType("dist/test.pdf")).toBe("application/pdf")
})

test("test checksum", async () => {
  const fileBuffer = readFileSync(fileName)
  const rs = new NodeAdapterReedSolomon()
  const expectCheckSums = await rs.encodeInSubWorker(
    Uint8Array.from(fileBuffer)
  )
  expect(expectCheckSums[0]).not.toEqual(
    "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU="
  )
})
