document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userEmail, userPassword);


    if (userEmail == '1' && userPassword == '2') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        alert("Input Value Is Invalid")
    }
})