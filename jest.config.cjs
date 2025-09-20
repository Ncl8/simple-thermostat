module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(j|t)s?$': ['ts-jest', {
      useESM: true,
    }],
  },
  transformIgnorePatterns: ['node_modules/(?!(lit))'],
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        // allow js in typescript
        allowJs: true,
        rootDir: './',
      },
    },
  },
}
