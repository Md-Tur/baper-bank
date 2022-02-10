document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user pass 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    // login check by mail & pass 
    if (userEmail == 'abc@gmail.com' && userPass == 'abc') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid user id or pass');
    }
});

