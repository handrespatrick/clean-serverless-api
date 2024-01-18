module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  verbose: true,
  setupFiles: ['./tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.scafflater/init/test']
}
