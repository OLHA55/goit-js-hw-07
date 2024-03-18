  const form = document.querySelector('.login-form');

form.addEventListener('submit', (element) => {
  element.preventDefault();
  const emailValue = form.email.value.trim();
  const passwordValue = form.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('Please fill in all fields');
    return;
  }
  const formObject = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formObject);

  form.reset();
});