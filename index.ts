import colours from './utilities/colours';
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
console.log('' + '   --server, -s to run a Bun server.\n\n');

// Yargs Data
console.log(colours.cyan, '   ___ 🛂 Yargs Data ___\n');
const rawArgs: string[] = process.argv.slice(2);
const yargsArgs: yargs.Arguments = yargs(rawArgs) || {};
console.log('   The raw arguments:', rawArgs);
console.log('   The Yargs arguments:', JSON.stringify(yargsArgs));
console.log('');

// Bun Server
if (yargsArgs.server || yargsArgs.s) {
  console.log(colours.cyan, '   ___ 📦 Bun Server ___\n');
  const server = Bun.serve({
    port: 3000,
    fetch(_req) {
      return new Response('Hello world! 👋 You are running on Bun! 🍞');
    },
  });
  console.log(
    colours.green,
    `   Listening on http://localhost:${server.port}\n`
  );
  console.log(
    '   The server will close in 60 seconds, otherwise press Ctrl+C to quit.'
  );
  setTimeout(() => {
    process.exit(0);
  }, 60000);
}
