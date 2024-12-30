import { parseArgs } from 'util';
import colours from './utilities/colours';
import log from './utilities/log';

console.log(
  colours.cyan,
  '\n\n' +
    '    ██████╗██╗     ██╗███████╗\n' +
    '   ██╔════╝██║     ██║██╔════╝\n' +
    '   ██║     ██║     ██║█████╗  \n' +
    '   ██║     ██║     ██║██╔══╝  \n' +
    '   ╚██████╗███████╗██║███████╗\n' +
    '    ╚═════╝╚══════╝╚═╝╚══════╝  Command Line Interface Example\n' +
    ' ===============================================================\n'
);
log('--server, -s to run a Bun server.\n\n');

// Environment Variables
log('___ 🌱 Environment Variables ___\n', colours.cyan);

const port: string = Bun.env.PORT || '3000';
const greeting: string =
  Bun.env.GREETING || `Hello world! 👋 You are running on Bun! 🍞`;

log(`PORT: ${port}`);
log(`GREETING: ${greeting}`);
log('');

// Bun.argv Data
log('___ 🛂 Bun.argv Data ___\n', colours.cyan);

const rawArgs: string[] = Bun.argv.slice(2);
const parsedArgs: { server?: boolean; s?: boolean } =
  parseArgs({
    args: Bun.argv,
    options: {
      server: {
        type: 'boolean',
      },
      s: {
        type: 'boolean',
      },
    },
    strict: true,
    allowPositionals: true,
  }).values || {};

log(`The raw arguments: ${rawArgs.length ? rawArgs : 'None'}`);
log(`The parsed arguments: ${JSON.stringify(parsedArgs)}`);
log('');

// Bun Server
if (parsedArgs.server || parsedArgs.s) {
  log('___ 📦 Bun Server ___\n', colours.cyan);

  const server = Bun.serve({
    port: port,
    fetch(_req) {
      return new Response(greeting);
    },
  });

  log(`Listening on http://localhost:${server.port}\n`, colours.green);
  log('The server will close in 60 seconds, otherwise press Ctrl+C to quit.');

  setTimeout(() => {
    process.exit(0);
  }, 60000);
}
