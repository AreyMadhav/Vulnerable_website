var text = "if you try login, I guess there is only one way to find out..... or you can just login lol";
var delay = 100; // milliseconds

function typeCharacter(i, callback) {
  if (i < text.length) {
    var char = text.charAt(i);
    var code = document.getElementById("code-text");
    code.textContent += char;
    i++;
    setTimeout(function () { typeCharacter(i, callback); }, delay);
  } else {
    callback();
  }
}

function typeText() {
  typeCharacter(0, function () { });
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  loadUsers(function (users) {
    var validUser = users.find(function (user) {
      return user.username === username && user.password === password;
    });

    if (validUser) {
      window.location.href = "Index.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

typeText();
