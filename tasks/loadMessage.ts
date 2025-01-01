import colours from '../utilities/colours';
import log from '../utilities/log';

export default (): void => {
  log('___ 📝 Miscellaneous Message ___\n', colours.cyan);
  log(
    {
      1: '🍰 A good cake, is a tasty cake.',
      2: '🥃 Think glass half full, than half empty.',
      3: '🛤️ A thousand miles begins with one step.',
      4: '📡 Two wifi engineers got married, the reception was fantastic.',
      5: '👀 I can tell when people are being judgmental just by looking at them.',
      6: '✏️ Blunt pencils are really pointless.',
      7: '🌍 The rotation of Earth really makes my day.',
      8: '⬜️ Whiteboards are remarkable.',
      9: '⚛️ Never trust atoms; they make up everything.',
      10: '⏎ I was addicted to the hokey pokey, but then I turned myself around.',
    }[Math.floor(Math.random() * 11) + 1] ?? '👋 Hello world!',
    colours.yellow
  );
  log('');
};
