import AdmZip from 'adm-zip';
import colours from '../utilities/colours';
import log from '../utilities/log';

export default (zipFile: string | undefined) => {
  log('___ 🗄️ Zip File Entries ___\n', colours.cyan);

  if (!zipFile || zipFile.indexOf('.zip') < 0) {
    log('Please choose a zip file.', colours.red);
  } else {
    const loadedZip = new AdmZip(zipFile);
    const entries = loadedZip.getEntries();

    entries.forEach((entry: { entryName: string }) => {
      log(`- ${entry.entryName}`);
    });
  }

  log('');
};
