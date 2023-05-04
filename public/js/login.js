const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = $('#email-login').val().trim();
    const password = $('#password-login').val().trim();
  
    if (email && password) { 
      const response = await fetch('/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { 
        document.location.replace('/home'); 
      } else {
        alert('Failed to log in. Try again.');
      }
    }
  };
  
  $('#login-form').on('submit', loginFormHandler);