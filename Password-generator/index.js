
// START OF SCRIPT

const buttonClick = document.getElementById("generatorBtn")

//Declaration of array to choose characters from
const fullCharacterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "(",
    ")", "-", "_", "+", "=", "~", "<", ">", "?", "[", "]", "{", "}"]

// Storing the array length
const arrayLength = fullCharacterArr.length;

// function to create the random password by generating a random character from fullCharacterArr and concatinating it into an empty string
function generatorPassword() {
    const getPasswordLength = document.getElementById("passwordLength").value;
    let passwordString = "";
    for (let i = 0; i < getPasswordLength; i++) {
        const randCharIndex = Math.floor(Math.random() * arrayLength);
        passwordString = passwordString + fullCharacterArr[randCharIndex];
    }
    return passwordString;
}

// click event to run a function that inputs the random password strinng into any element in the DOM with a class name of .password
buttonClick.addEventListener("click", function (event) {
    if (document.getElementById("passwordLength").value.length == 0) {
        event.preventDefault();
    } else {
        const passwordBlocks = document.querySelectorAll(".password").length;
        const newPassword = document.getElementsByClassName("password");

        for (let j = 0; j < passwordBlocks; j++) {
            newPassword[j].innerText = generatorPassword();
        }
    }
});



// END OF SCRIPT
