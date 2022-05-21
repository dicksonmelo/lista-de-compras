const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig")
import type { Config } from "@jest/types"
import {defaults} from "jest-config"


export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    //   prefix: "<rootDir>/",
    // }),
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts']
  }
}
