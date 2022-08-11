let textPromp = '  Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Etiam in orci bibendum, eleifend urna a, euismod nulla. Curabitur viverra libero.  ';
let count = 0;

textPromp = textPromp.trim().split(/\s+/);

console.log(textPromp);
console.log(`The text has: ${textPromp.length} words`);