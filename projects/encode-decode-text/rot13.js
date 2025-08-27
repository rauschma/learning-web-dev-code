export const rot13Char = (baseChar, char) => {
  const baseCodePoint = baseChar.codePointAt(0);
  let relCodePoint = char.codePointAt(0) - baseCodePoint;
  relCodePoint = (relCodePoint + 13) % 26;
  return String.fromCodePoint(
    baseCodePoint + relCodePoint
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
