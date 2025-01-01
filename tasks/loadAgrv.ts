import { parseArgs } from 'util';
import colours from '../utilities/colours';
import log from '../utilities/log';

export default (): {
  server?: boolean;
  s?: boolean;
} => {
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

  return parsedArgs;
};
