const path = require('path');

module.exports = {
  transform: {
    ".tsx?$": "ts-jest",
    ".jsx?$": "jest-flow-transform"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/source/common/$1",
    "~/(.*)": "<rootDir>/source/scenes/$1",
    "%/(.*)": "<rootDir>/source/assets/$1"
  },
  transformIgnorePatterns: [
      "/node_modules/"
  ],
  ...require(path.resolve(__dirname, 'config', 'jest', `jest.${ process.env.PLATFORM }.config`))
};

