import { parseArgs } from 'util';
import colours from '../utilities/colours';
import log from '../utilities/log';

type Args = {
  c?: boolean;
  calc?: boolean;
  s?: boolean;
  server?: boolean;
  z?: string;
  zip?: string;
};

export default (): Args => {
  log('___ 🛂 Bun.argv Data ___\n', colours.cyan);

  const rawArgs: string[] = Bun.argv.slice(2);
  const parsedArgs: Args =
    parseArgs({
      args: Bun.argv,
      options: {
        c: {
          type: 'boolean',
        },
        calc: {
          type: 'boolean',
        },
        s: {
          type: 'boolean',
        },
        server: {
          type: 'boolean',
        },
        z: {
          type: 'string',
        },
        zip: {
          type: 'string',
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
