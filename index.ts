import colours from './utilities/colours';

console.log(
  colours.cyan,
  '\n' +
    '    ██████╗██╗     ██╗███████╗\n' +
    '   ██╔════╝██║     ██║██╔════╝\n' +
    '   ██║     ██║     ██║█████╗  \n' +
    '   ██║     ██║     ██║██╔══╝  \n' +
    '   ╚██████╗███████╗██║███████╗\n' +
    '    ╚═════╝╚══════╝╚═╝╚══════╝  Command Line Interface Example\n' +
    ' ===============================================================\n'
);

// Bun Server
console.log(colours.cyan, '   ___ 📦 Bun Server ___\n');
const server = Bun.serve({
  port: 3000,
  fetch(_req) {
    return new Response('Hello world! 👋 You are running on Bun! 🍞');
  },
});
console.log(colours.green, `   Listening on http://localhost:${server.port}\n`);
console.log(
  '   The server will close in 60 seconds, otherwise press Ctrl+C to quit.'
);
setTimeout(() => {
  process.exit(0);
}, 60000);
