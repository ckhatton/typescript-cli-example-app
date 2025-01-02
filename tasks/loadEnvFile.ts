import colours from '../utilities/colours';
import log from '../utilities/log';

const port: number =
  Bun.env.PORT && !Number.isNaN(parseInt(Bun.env.PORT))
    ? parseInt(Bun.env.PORT)
    : 3000;
const greeting: string =
  Bun.env.GREETING || `Hello world! 👋 You are running on Bun! 🍞`;
const githubToken: string = Bun.env.GITHUB_PERSONAL_ACCESS_TOKEN || '-';

export default (): {
  githubToken: string;
  greeting: string;
  port: number;
} => {
  log('___ 🌱 Environment Variables ___\n', colours.cyan);
  log(`PORT: ${port}`);
  log(`GREETING: ${greeting}`);
  log(
    `GITHUB_PERSONAL_ACCESS_TOKEN: ${
      githubToken.length > 32
        ? githubToken.substring(0, 32) + '...'
        : githubToken
    }`,
    githubToken ? undefined : colours.red
  );
  log('');

  return { githubToken, greeting, port };
};
