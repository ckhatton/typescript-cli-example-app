#!/usr/bin/env bun
import loadArgv from './tasks/loadArgv.ts';
import loadBunServer from './tasks/loadBunServer.ts';
import loadEnvFile from './tasks/loadEnvFile';
import loadGitHub from './tasks/loadGitHub';
import loadHeader from './tasks/loadHeader';
import loadMessage from './tasks/loadMessage';
import loadZipFile from './tasks/loadZipFile.ts';

// Header
loadHeader();

// Misc. Message
loadMessage();

// Environment Variables
const { githubToken, greeting, port } = loadEnvFile();

// Bun.argv Data
const parsedArgs = loadArgv();

// Zip File Entries
if (parsedArgs.zip || parsedArgs.z) {
  loadZipFile(parsedArgs.zip || parsedArgs.z);
}

// GitHub
await loadGitHub(githubToken);

// Bun Server
if (parsedArgs.server || parsedArgs.s) {
  loadBunServer(greeting, port);
}

// Calculator
if (parsedArgs.calc || parsedArgs.c) {
  const { default: loadCalculation } = await import(
    './tasks/loadCalculation.ts'
  );
  loadCalculation(parsedArgs.server || parsedArgs.s);
}
