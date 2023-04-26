var text = " Great haxx, much l00t wow!!";
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