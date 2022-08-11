let text_1 = 'Microsoft';
let text_2 = 'M1cr0s0ft';
let distance = 0;

try {
    if (text_1.length != text_2.length) {
        throw 'diferrent distances';
    } else {
        for (let i = 0; i < text_1.length; i++) {
            if (text_1.charAt(i) != text_2.charAt(i))
                distance++;
        }
        console.log(`The distance is: ${distance}`);
    }
} catch (error) {
    console.log(error);
}
