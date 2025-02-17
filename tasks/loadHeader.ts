import colours from '../utilities/colours';
import log from '../utilities/log';

export default (): void => {
  console.log(
    colours.cyan,
    '\n\n' +
      '      ██████╗██╗     ██╗███████╗\n' +
      '     ██╔════╝██║     ██║██╔════╝\n' +
      '     ██║     ██║     ██║█████╗  \n' +
      '     ██║     ██║     ██║██╔══╝  \n' +
      '     ╚██████╗███████╗██║███████╗\n' +
      '      ╚═════╝╚══════╝╚═╝╚══════╝  Command Line Interface Example\n' +
      '   ===============================================================\n'
  );
  log('--calc, -c to run a random calculation.');
  log('--server, -s to run a Bun server.');
  log(
    `--zip '<zip file>', -z '<zip file>' to list the entries of a zip file.\n\n`
  );
};
