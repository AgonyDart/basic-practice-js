let input = 'VO@4j*pM54M1a&wx!V8F*f7&4R94CnEN';
let pattern = /([A-Z])/g;

function countTypeOfChar(text, regex) {
    let matches = [...text.matchAll(regex)];

    // console.log(matches);
    console.log(`The characters in ${regex}, matches ${matches.length} with the text`)

    return matches.length;
}

countTypeOfChar(input, pattern);