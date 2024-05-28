document.getElementById('generateBtn').addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById('randomNumber').textContent = randomNumber;
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
