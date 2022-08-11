const textPromp = "ercffftgvhjAQWSXEfRDCffTFVGffYBHfJ";
let charToCount = 'f';
let counter = 0;

for (const char of textPromp) {
    if (char === charToCount)
        counter++
}

console.log(`${charToCount} appears ${counter} times in the text`)