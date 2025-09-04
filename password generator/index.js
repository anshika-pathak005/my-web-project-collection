const passwordBox = document.getElementById("password");
const strengthSelect = document.getElementById("strength");

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~`!@#$%^&*()-+\|{}[]<>';

//const allChars = upperCase + lowerCase + number + chars;

function generatePassword() {
    document.getElementById("copyBtn").innerHTML = "Copy";

    const strength = strengthSelect.value;
    if (!strength) {
        alert("Please select a password strength!");
        return;
    }

    let chars = '';
    let length = 8;

    if (strength === 'weak') {
        chars = lowerCase + upperCase + numbers;
        length = 8; // short but still mixed
    } else if (strength === 'medium') {
        chars = lowerCase + upperCase + numbers + symbols;
        length = 12;
    } else if (strength === 'hard') {
        chars = lowerCase + upperCase + numbers + symbols;
        length = 16;
    }

    let password = '';

    if (strength === 'hard') {
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Fill remaining characters
    while (password.length < length) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Shuffle password to remove predictable pattern
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
}

function copyPassword(){
    if(passwordBox.value.length <= 0){
        return
    }
    passwordBox.select();
    document.execCommand("copy");
    document.getElementById("copyBtn").innerHTML = "Copied";
}