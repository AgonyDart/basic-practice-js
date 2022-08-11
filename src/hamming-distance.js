let input_1 = 'Microsoft';
let input_2 = 'M1cr0s0ft';

const hamming = (string1, string2) => {
    let distance = 0;
    try {
        if (string1.length != string2.length) {
            throw 'diferrent distances';
        } else {
            for (let i = 0; i < string1.length; i++) {
                if (string1.charAt(i) != string2.charAt(i))
                    distance++;
            }

            console.log(`The distance is: ${distance}`);
            return distance;
        }
    } catch (error) {
        console.log(error);
    }
}

hamming(input_1, input_2);