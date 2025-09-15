/**
 * @module
 * Tools for the web crypto API
 */

//========== Source: JSR package @brielov/crypto ==========
// https://github.com/brielov/crypto/blob/master/hash.ts

/**
 * Hashes a password using the PBKDF2 algorithm with SHA-256.
 *
 * @param {string} password - The password to hash.
 * @param {Uint8Array} salt - A cryptographically secure random salt. Must be at least 16 bytes long.
 * @param {number} iterations - The number of iterations for the PBKDF2 algorithm. Defaults to 100,000.
 * @returns A Uint8Array containing the hashed password.
 *
 * @throws {Error} If the salt is less than 16 bytes long.
 *
 * @example
 * const password = 'mySecurePassword';
 * const salt = generateSalt();
 * const hashedPassword = await hash(password, salt);
 */
export async function hash(
  password,
  salt,
  iterations = 100_000, // Default iterations, configurable for future-proofing
  keyLength = 256, // 256 bits = 32 bytes
  hashAlgorithm = "SHA-256",
) {
  if (salt.length < 16) {
    throw new Error("Salt must be at least 16 bytes long for security.");
  }

  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );

  const hashedPassword = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: iterations,
      hash: hashAlgorithm,
    },
    keyMaterial,
    keyLength,
  );

  return new Uint8Array(hashedPassword);
}

/**
 * Verifies a password against a hashed password.
 *
 * @param {string} password - The password to verify.
 * @param {Uint8Array} hashedPassword - The hashed password to compare against.
 * @param {Uint8Array} salt - The salt used during the original hashing process.
 * @param {number} iterations - The number of iterations used during the original hashing process. Defaults to 100,000.
 * @returns A boolean indicating whether the password matches the hashed password.
 *
 * @example
 * const password = 'mySecurePassword';
 * const salt = generateSalt();
 * const hashedPassword = await hash(password, salt);
 * const isVerified = await verify(password, hashedPassword, salt);
 * console.log(isVerified); // true or false
 */
export async function verify(
  password,
  hashedPassword,
  salt,
  iterations, // If missing (`undefined`), default of hash function is used
  keyLength, // If missing (`undefined`), default of hash function is used
  hashAlgorithm, // If missing (`undefined`), default of hash function is used
) {
  const newHashedPassword = await hash(password, salt, iterations, keyLength, hashAlgorithm);

  // Constant-time comparison to prevent timing attacks
  if (newHashedPassword.length !== hashedPassword.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < newHashedPassword.length; i++) {
    result |= newHashedPassword[i] ^ hashedPassword[i];
  }

  return result === 0;
}

//========== Source: JSR package @brielov/crypto ==========
// https://github.com/brielov/crypto/blob/master/utils.ts

/**
 * Generates a cryptographically secure random salt.
 *
 * @param length - The length of the salt in bytes. Must be at least 16 bytes long. Defaults to 16.
 * @returns A Uint8Array containing the generated salt.
 *
 * @throws {Error} If the length is less than 16 bytes.
 *
 * @example
 * const salt = generateSalt(); // Uint8Array of 16 random bytes
 * const customSalt = generateSalt(32); // Uint8Array of 32 random bytes
 */
export function generateSalt(length = 16) {
  if (length < 16) {
    throw new Error("Salt length must be at least 16 bytes for security.");
  }
  return crypto.getRandomValues(new Uint8Array(length));
}

//========== Source: Stack Overflow user mikemaccana ==========
// https://stackoverflow.com/questions/59777670/how-can-i-hash-a-string-with-sha256/67600346#67600346

export const getHashForText = async (input, hashAlgorithm = "SHA-256") => {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest(hashAlgorithm, textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
  return hash;
};

//========== Source: web.dev ==========
// https://web.dev/articles/base64-encoding

/**
 * @see Polyfill for: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
 */
export function fromBase64(base64) {
  const binString = atob(base64);
  // Each JavaScript letter is a byte
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

/**
 * @see Polyfill for: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64
 */
export function toBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  // Each JavaScript letter is a byte
  return btoa(binString);
}
