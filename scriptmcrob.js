var text = " aSB3YW50IHRvIHB1Ymxpc2ggYSBtYW5nYSBieSB0aGUgZW5kIG9mIG15IEJDQSBhbmQgdGhlbiBpIHdhbnQgdG8gZ28gdG8gamFwYW4=";
var delay = 100; // milliseconds

function typeCharacter(i, callback) {
    if (i < text.length) {
        var char = text.charAt(i);
        var code = document.getElementById("code-text");
        code.textContent += char;
        i++;
        setTimeout(function () { typeCharacter(i, callback); }, delay);
    }
    else {
        callback();
    }
}

function typeText() {
    typeCharacter(0, function () { });
}

typeText();