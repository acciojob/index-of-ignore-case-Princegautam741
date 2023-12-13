// script.js
function indexOfIgnoreCase(s1, s2) {
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();

    return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const inputS1 = prompt("Enter s1:");
const inputS2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(inputS1, inputS2));
