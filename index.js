"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeChar = void 0;
const my_string = "1";
console.log(String.fromCharCode(my_string.charCodeAt(my_string.length - 1) + 1));
const changeChar = (data) => {
    let letter = "";
    let changedLetter = "";
    let number = "0123456789";
    let consonant = "bcdfghjklmnpqrstvwxyz";
    let vowels = "aeiou";
    data = data.toLocaleLowerCase();
    for (let i = 0; i < data.length; i++) {
        //console.log(data.substring(i, i+1))
        letter = data.substring(i, i + 1);
        if (number.includes(letter)) {
            changedLetter += letter;
        }
        else if (letter === 'z') {
            changedLetter += "A";
        }
        else {
            let tempLetter;
            tempLetter = String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
            if (vowels.includes(tempLetter)) {
                tempLetter = tempLetter.toLocaleUpperCase();
                changedLetter += tempLetter;
            }
            else {
                tempLetter.toLocaleLowerCase();
                changedLetter += tempLetter;
            }
        }
    }
    console.log(changedLetter);
};
exports.changeChar = changeChar;
(0, exports.changeChar)("Zat30");
