import colours from '../utilities/colours';
import log from '../utilities/log';

function loadEnvFile(): {
  greeting: string;
  port: number;
} {
  log('___ 🌱 Environment Variables ___\n', colours.cyan);

  const port: number = (() => {
    if (Bun.env.PORT && !Number.isNaN(parseInt(Bun.env.PORT))) {
      return parseInt(Bun.env.PORT);
    }

    return 3000;
  })();
  const greeting: string =
    Bun.env.GREETING || `Hello world! 👋 You are running on Bun! 🍞`;

  log(`PORT: ${port}`);
  log(`GREETING: ${greeting}`);
  log('');

  return { greeting, port };
}

export default loadEnvFile;
