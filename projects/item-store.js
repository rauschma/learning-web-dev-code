import * as fs from 'node:fs';

const readData = (filePath) => {
  try {
    const json = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(json);
  } catch (err) {
    if (err instanceof Error && err.code === 'ENOENT') {
      // File does not exist yet, start fresh
      return {
        items: [],
      };
    } else {
      throw err;
    }
  }
};

const writeData = (filePath, data) => {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, json);
};

const minLenOrThrow = (args, minLen, subcommand) => {
  if (args.length < minLen) {
    throw new Error(
      `Subcommand ${subcommand} needs 2 arguments`
    );
  }
}

const SUBCMD_ADD = 'add';

const main = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(
      `item-store.js ${SUBCMD_ADD} <file-path> "string to add"`
    );
    return;
  }
  // There is at least one argument
  const subcommand = args[0];
  if (subcommand === SUBCMD_ADD) {
    // Args: add <file-path> "string to add"
    minLenOrThrow(args, 3, SUBCMD_ADD);
    const filePath = args[1];
    const strToAdd = args[2];

    const data = readData(filePath);
    data.items.push(strToAdd);
    writeData(filePath, data);
  } else {
    throw new Error('Unknown subcommand: ' + subcommand);
  }
};

main();