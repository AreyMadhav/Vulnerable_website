const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  fetch('user.json')
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password');
      }
    });
});
