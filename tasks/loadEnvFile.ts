import colours from '../utilities/colours';
import log from '../utilities/log';

function loadEnvFile(): {
  githubToken: string;
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
  const githubToken: string = Bun.env.GITHUB_PERSONAL_ACCESS_TOKEN || '';

  log(`PORT: ${port}`);
  log(`GREETING: ${greeting}`);
  log(
    `GITHUB_PERSONAL_ACCESS_TOKEN: ${(() => {
      if (githubToken.length > 32) {
        return githubToken.substring(0, 32) + '...';
      } else {
        return githubToken ? githubToken : '-';
      }
    })()}`,
    githubToken ? undefined : colours.red
  );
  log('');

  return { githubToken, greeting, port };
}

export default loadEnvFile;
