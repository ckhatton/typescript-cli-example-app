import colours from '../utilities/colours';
import log from '../utilities/log';

function loadBunServer(greeting: string, port: number): void {
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
    log('');
    process.exit(0);
  }, 60000);
}

export default loadBunServer;
