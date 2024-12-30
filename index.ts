import colours from './utilities/colours';
import log from './utilities/log';
import yargs from 'yargs-parser';

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

// Yargs Data
log('___ 🛂 Yargs Data ___\n', colours.cyan);
const rawArgs: string[] = process.argv.slice(2);
const yargsArgs: yargs.Arguments = yargs(rawArgs) || {};
log(`The raw arguments: ${rawArgs}`);
log(`The Yargs arguments: ${JSON.stringify(yargsArgs)}`);
log('');

// Bun Server
if (yargsArgs.server || yargsArgs.s) {
  log('___ 📦 Bun Server ___\n', colours.cyan);
  const server = Bun.serve({
    port: 3000,
    fetch(_req) {
      return new Response('Hello world! 👋 You are running on Bun! 🍞');
    },
  });
  log(`Listening on http://localhost:${server.port}\n`, colours.green);
  log('The server will close in 60 seconds, otherwise press Ctrl+C to quit.');
  setTimeout(() => {
    process.exit(0);
  }, 60000);
}
