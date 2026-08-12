// Metro needs to be told about the monorepo, otherwise it will not resolve
// @vfc/shared from the workspace root or watch it for changes.
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// Prefer the app's own copy of a dependency when both exist.
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
