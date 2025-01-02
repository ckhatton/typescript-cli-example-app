import colours from '../utilities/colours';
import log from '../utilities/log';
import readline from 'node:readline/promises';

const operation: string =
  {
    1: '/',
    2: '*',
    3: '+',
    4: '-',
  }[Math.floor(Math.random() * 4) + 1] ?? '/';

Object.freeze(operation);

const rli: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default async (parsedArgsServer?: boolean): Promise<void> => {
  if (parsedArgsServer) log('');

  log('___ 🔢 Calculator ___\n', colours.cyan);

  const number01: number = parseInt(
    await rli.question('   Please provide a number:\n')
  );
  const number02: number = parseInt(
    await rli.question('\n   And another number:\n')
  );

  if (Number.isNaN(number01) || Number.isNaN(number02)) {
    log('\n   Please provide integers only!', colours.red);
  } else {
    log(
      `\n   ${number01} ${operation} ${number02} = ${eval(
        number01 + operation + number02
      )}`
    );
  }

  if (!parsedArgsServer) log(''), process.exit(0);
};
