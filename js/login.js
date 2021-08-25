document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    // console.log(userEmail, userPassword);


    if (userEmail == 'abbuiloveyou@gmail.com' && userPassword == 'mailoveyoutoo') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
})