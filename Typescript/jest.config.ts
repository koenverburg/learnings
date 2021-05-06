module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // this will become default in jest 27:
  testRunner: 'jest-circus/runner',
  cacheDirectory: '../.jest-cache',

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  testMatch: ['**/__tests__/**/*(*.)(spec).ts?(x)'],

  transform: {
    //    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
