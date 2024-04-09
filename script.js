const form = document.querySelector('.form');
const usernameInput = form.querySelector('#username');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');
const confirmPasswordInput = form.querySelector('#confirm-password');
const submitButton = form.querySelector('.button-next');

const usernamePattern = /^[a-zA-Z0-9]{3,16}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener('input', () => {
  const usernameValid = usernamePattern.test(usernameInput.value);
  const emailValid = emailPattern.test(emailInput.value);
  const passwordValid = passwordPattern.test(passwordInput.value);
  const confirmPasswordValid = passwordInput.value === confirmPasswordInput.value && passwordValid;

  submitButton.disabled = !usernameValid || !emailValid || !passwordValid || !confirmPasswordValid;
});

form.addEventListener('submit', function(event) {
  if (!document.getElementById('agree').checked) {
    event.preventDefault();
    alert('Please indicate that you have read and agree to the Terms of Service and Privacy Policy');
  }
});