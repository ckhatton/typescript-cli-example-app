#!/usr/bin/env bun
import loadArgv from './tasks/loadAgrv';
import loadBunServer from './tasks/loadBunServer.ts';
import loadEnvFile from './tasks/loadEnvFile';
import loadGitHub from './tasks/loadGitHub';
import loadHeader from './tasks/loadHeader';
import loadMessage from './tasks/loadMessage';

// Header
loadHeader();

// Misc. Message
loadMessage();

// Environment Variables
const { githubToken, greeting, port } = loadEnvFile();

// Bun.argv Data
const parsedArgs = loadArgv();

// GitHub
await loadGitHub(githubToken);

// Bun Server
if (parsedArgs.server || parsedArgs.s) {
  loadBunServer(greeting, port);
}
