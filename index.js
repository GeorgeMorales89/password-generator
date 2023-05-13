
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const specialChars = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/";

const passWordOne = document.getElementById("password-one");
const passWordTwo = document.getElementById("password-two");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const numbersCheckbox = document.getElementById("numbers");
const specialCheckbox = document.getElementById("special");

function generatePassword() {
    let password1 = "";
    let password2 = "";
    let passwordLength = lengthSlider.value;
    lengthValue.textContent = passwordLength;

    let allowedChars = uppercaseChars + lowercaseChars;
    if (numbersCheckbox.checked) {
        allowedChars += numberChars; 
    }
    if (specialCheckbox.checked) {
        allowedChars += specialChars;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomOne = Math.floor(Math.random() * allowedChars.length);
        password1 += allowedChars[randomOne];

        const randomTwo = Math.floor(Math.random() * allowedChars.length);
        password2 += allowedChars[randomTwo];
    }

    passWordOne.textContent = password1;
    passWordTwo.textContent = password2;
    }

    lengthValue.textContent = lengthSlider.value;
    lengthSlider.oninput = function() {
    lengthValue.textContent = this.value;
    }
    
    