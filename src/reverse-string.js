const textPromp = 'winter';
let textResult = '';

for (let i = textPromp.length; i >= 0; i--) {
    textResult += textPromp.charAt(i - 1);
}

console.log(textResult);