export const rot13Char = (baseChar, char) => {
  let relCodePoint = char.codePointAt(0) - baseChar.codePointAt(0);
  relCodePoint = (relCodePoint + 13) % 26;
  return String.fromCodePoint(
    baseChar.codePointAt(0) + relCodePoint
  );
};

export const rot13 = (str) => {
  let result = '';
  for (const char of Array.from(str)) {
    if (char.length === 1 && char >= 'A' && char <= 'Z') {
      result += rot13Char('A', char);
    } else if (char.length === 1 && char >= 'a' && char <= 'z') {
      result += rot13Char('a', char);
    } else {
      result += char;
    }
  }
  return result;
};
