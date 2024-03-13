function submitForm() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Here you can perform validation checks before submitting the form
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return false;
    }

    // You can then make an AJAX request to validate the login credentials
    // For demonstration purposes, I'll just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, you can submit the form using JavaScript
    document.getElementById('loginForm').submit();
  }
  

