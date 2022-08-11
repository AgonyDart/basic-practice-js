const input = 'winter';

const reverseString = (text) => {
    let textResult = '';

    for (let i = text.length; i >= 0; i--) {
        textResult += text.charAt(i - 1);
    }

    console.log(`${text} reversed is ${textResult}`);
    return textResult;
}
reverseString(input);