import { isValidPassword, readPasswordsMap, setPassword, writePasswordsMap } from '../server/password-tools.js';
import * as url from 'node:url';

const BIN = 'passman.js';
const CMD_SET = 'set';
const CMD_RM = 'rm';
const CMD_CHECK = 'check';
const CMD_LS = 'ls';

function logHelp() {
  const lines = [
    `Subcommands:`,
    `${BIN} ${CMD_SET} <passwords.json> <user> <password>`,
    `  Adds or changes a given password.`,
    `  Creates the passwords file if it doesn’t exist yet.`,
    `${BIN} ${CMD_RM} <passwords.json> <user>`,
    `  Removes a password entry.`,
    `${BIN} ${CMD_CHECK} <passwords.json> <user> <password>`,
    `  Checks if the given password is correct.`,
    `${BIN} ${CMD_LS} <passwords.json>`,
    `  Lists all users in the passwords file.`,
  ];
  console.log(lines.join('\n'));
}

function checkArgsLength(args, cmd, len) {
  if (args.length < len) {
    let plural = 's';
    if (len === 1) {
      plural = '';
    }
    throw new Error(`Command "${cmd}" needs ${len} argument${plural}`)
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    logHelp();
    return;
  }

  const command = args.shift(); // remove args[0]
  if (command === undefined) {
    throw new Error('Missing: subcommand');
  }

  if (command === CMD_SET) {
    checkArgsLength(args, CMD_SET, 3);
    const fileUrl = url.pathToFileURL(args[0]);
    const user = args[1];
    const password = args[2];
    const passwordsMap = await readPasswordsMap(fileUrl);
    await setPassword(passwordsMap, user, password)
    await writePasswordsMap(passwordsMap, fileUrl);
    return;
  }

  if (command === CMD_RM) {
    checkArgsLength(args, CMD_RM, 2);
    const fileUrl = url.pathToFileURL(args[0]);
    const user = args[1];
    const passwordsMap = await readPasswordsMap(fileUrl);
    passwordsMap.delete(user);
    await writePasswordsMap(passwordsMap, fileUrl);
    return;
  }

  if (command === CMD_CHECK) {
    checkArgsLength(args, CMD_CHECK, 3);
    const fileUrl = url.pathToFileURL(args[0]);
    const user = args[1];
    const password = args[2];
    const passwordsMap = await readPasswordsMap(fileUrl);
    const isValid = await isValidPassword(passwordsMap, user, password);
    console.log(isValid)
    return;
  }

  if (command === CMD_LS) {
    checkArgsLength(args, CMD_LS, 1);
    const fileUrl = url.pathToFileURL(args[0]);
    const passwordsMap = await readPasswordsMap(fileUrl);
    for (const user of passwordsMap.keys()) {
      console.log(user);
    }
    return;
  }

  throw new Error('Unknown command: ' + command);
}

await main();