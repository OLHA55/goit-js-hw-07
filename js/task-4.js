const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit); // Changed "Login" to "submit" to listen for form submission event

function submitForm() {
  const emailEl = document.getElementById('emailInput').value;
  const passwordEl = document.getElementById('passwordInput').value;

  if (emailEl === '' || passwordEl === '') {
    alert('Please fill in all fields');
    return false;
  }

  // There seems to be an incomplete operation here, maybe you intended to format a string?

  return true; // Added a return statement at the end of the function
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const info = {
    email: email.value,
    password: password.value
  };

  console.log(info);
  event.target.reset(); // Corrected misspelling of 'reset' function
}