const input = "ercffftgvhjAQWSXEfRDCffTFVGffYBHfJ";
let charToCount = 'f';

function countRepeated(text, character) {
    let counter = 0;

    for (const char of text) {
        if (char === character)
            counter++
    }

    console.log(`${charToCount} appears ${counter} times in the text`)
    return counter;
}

countRepeated(input, charToCount);