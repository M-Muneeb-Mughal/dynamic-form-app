import type { Config } from '@jest/types';

const rootDir = process.env.ROOT_DIR || process.cwd();

const config: Config.InitialOptions = {
  rootDir: rootDir,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/__tests__/**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['lcov', 'text-summary'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
