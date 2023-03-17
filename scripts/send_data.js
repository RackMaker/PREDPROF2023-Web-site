function sending() {
  login = document.querySelector('#login').value;
  password = document.querySelector('#password').value;

  eel.send_data(login, password);
}

eel.expose(alerter);
function alerter(message) {
  alert(message);
}
