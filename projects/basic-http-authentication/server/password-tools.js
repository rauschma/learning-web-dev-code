import { existsSync } from 'node:fs';
import * as fs from 'node:fs/promises';
import { fromBase64, generateSalt, hash, toBase64, verify } from './crypto-tools.js';

// Sibling of parent directory of this module
const DATA_DIR = new URL('../data/', import.meta.url);
if (!existsSync(DATA_DIR)) {
  throw new Error('Could not find data directory: ' + DATA_DIR);
}
const PASSWORDS_FILE = new URL('passwords.json', DATA_DIR);

export const readPasswordsMap = async (fileUrl = PASSWORDS_FILE) => {
  if (existsSync(fileUrl)) {
    const json = await fs.readFile(fileUrl, 'utf-8');
    const passwordsObject = JSON.parse(json);
    return new Map(Object.entries(passwordsObject));
  } else {
    return new Map();
  }
};

export const writePasswordsMap = async (passwordsMap, fileUrl = PASSWORDS_FILE) => {
  const passwordsObject = Object.fromEntries(passwordsMap.entries());
  await fs.writeFile(fileUrl, JSON.stringify(passwordsObject));
};

export async function setPassword(passwordsMap, user, password) {
  const saltBin = generateSalt();
  const hashedPasswordBin = await hash(password, saltBin);
  passwordsMap.set(
    user,
    {
      salt: toBase64(saltBin),
      hashedPassword: toBase64(hashedPasswordBin),
    }
  );
}

export async function isValidPassword(passwordsMap, user, password) {
  const entry = passwordsMap.get(user);
  if (entry === undefined) {
    return false;
  }
  const { salt, hashedPassword } = entry;
  const saltBin = fromBase64(salt);
  const hashedPasswordBin = fromBase64(hashedPassword);

  return await verify(password, hashedPasswordBin, saltBin);
}
