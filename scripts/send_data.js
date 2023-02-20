function sending() {
  login = document.querySelector('#login').value;
  password = document.querySelector('#password').value;

  reg_info = eel.send_data_to_json(login, password);

  window.location.href='../index.html';

  alert(reg_info);
}