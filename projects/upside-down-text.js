const dict = new Map();
const addToDict = (source, target) => {
  const srcArr = Array.from(source);
  const trgArr = Array.from(target);
  if (srcArr.length !== trgArr.length) {
    throw new Error();
  }
  for (let i = 0; i < srcArr.length; i++) {
    dict.set(srcArr[i], trgArr[i]);
  }
};
addToDict(
  `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  `ⱯꓭƆꓷƎℲ⅁HIꓩꓘ⅂ꟽNOԀꝹꓤS⊥ՈɅ𐤵X⅄Z`,
);
addToDict(
  `abcdefghijklmnopqrstuvwxyz`,
  `ɐqɔpǝɟƃɥᴉɾʞꞁɯuodbɹsʇnʌʍxʎz`,
);
addToDict(
  `0123456789`,
  `0ІᘔƐᔭ59Ɫ86`,
);
addToDict(
  `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,
  `¡„#$%⅋,)(*+'-˙/:؛>=<¿@]\\[ᵥ‾\`}|{~`,
);

const upsideDown = (str) => {
  return Array.from(str)
    .reverse()
    .map(
      (srcChar) => {
        return dict.get(srcChar) ?? srcChar;
      }
    ).join('')
  ;
};

// First shell argument
const arg = process.argv[2];
console.log(
  upsideDown(arg)
);
