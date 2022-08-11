let input = '  Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Etiam in orci bibendum, eleifend urna a, euismod nulla. Curabitur viverra libero.  ';

function countWords(text) {
    text = text.trim().split(/\s+/);

    console.log(text);
    console.log(`The text has: ${text.length} words`);
    return text.length;

}

countWords(input);