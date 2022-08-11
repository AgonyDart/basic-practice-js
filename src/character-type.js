let input = 'VO@4j*pM54M1a&wx!V8F*f7&4R94CnEN';
let pattern = /([A-Z])/g;

let matches = [...input.matchAll(pattern)];
console.log(matches.length);
