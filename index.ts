import loadArgv from './tasks/loadAgrv';
import loadBunServer from './tasks/loadBunServer.ts';
import loadEnvFile from './tasks/loadEnvFile';
import loadHeader from './tasks/loadHeader';

// Header
loadHeader();

// Environment Variables
const { greeting, port } = loadEnvFile();

// Bun.argv Data
const parsedArgs = loadArgv();

// Bun Server
if (parsedArgs.server || parsedArgs.s) {
  loadBunServer(greeting, port);
}
