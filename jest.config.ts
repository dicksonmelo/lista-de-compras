import type { Config } from "@jest/types"
import { defaults } from "jest-config"

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    clearMocks: true,
    testEnvironment: "node",
    moduleFileExtensions: [...defaults.moduleFileExtensions, "test.ts"],
  }
}
