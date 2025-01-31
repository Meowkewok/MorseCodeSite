input = document.createElement('input');
input.placeholder = 'Enter Text or Morse Code';
document.body.appendChild(input);
output = document.createElement('output');
document.body.appendChild(output);
let copyButton = document.createElement('button');
copyButton.textContent = 'Copy Output to Clipboard';
document.body.appendChild(copyButton);
copyButton.addEventListener('click', () => {
    copyToClipboard();
});
let clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
})
button = document.createElement('button');
button.textContent = 'Convert Text to Morse';
document.body.appendChild(button);
button.addEventListener('click', () => {
    displayCode();
});
button2 = document.createElement('button');
button2.textContent = 'Convert Morse to Text';
document.body.appendChild(button2);
button2.addEventListener('click', () => {
    displayMorse();
});


const morseKey = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--',
    'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
    '1': '.----', '2': '..--', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----'
} 

const letterKey = {
    '.-': 'a', '-...': 'b','-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm',
    '-.': 'n','---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u',  '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z',
    '.----': '1', '..--': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0'
} 

function convertText(inputText) {
    return inputText.toLowerCase()
                    .split('')
                    .map(char => morseKey[char] || ' ')
                    .join(' ');
}

function convertMorse(inputText) {
    return inputText.toLowerCase()
                    .split(' ')
                    .map(morseLetter => letterKey[morseLetter] || '')
                    .join(' ')
}

function displayCode() {
    let morseCode = convertText(input.value);
    output.textContent = morseCode;
}

function displayMorse() {
    let Text = convertMorse(input.value);
    output.textContent = Text;
}


document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Morse Code Translator', '-- --- .-. ... . -.-. --- -.. . - .-. .- -. ... .-.. .- - --- .-.'],
        typeSpeed: 150,
        backSpeed: 200,
        backDelay: 5000,
        startDelay: 1000,
        loop: true,
        showCursor: false
    };
    var typed = new Typed('#heading', options);
})

function copyToClipboard() {
    let temp = document.createElement('textarea');
    temp.value = output.textContent;
    document.body.appendChild(temp)
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp)
    alert('Copied to Clipboard!');
}

document.body.appendChild(clearButton);