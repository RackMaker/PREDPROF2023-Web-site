function checking() {
    login = document.querySelector('#login').value;
    password = document.querySelector('#password').value;

    eel.enter_to_account(login, password);

    window.location.href = '../index.html';
}