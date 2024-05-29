document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');

  const usernameValid = "Joao";
  const passwordValid = "1234";

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === usernameValid && password === passwordValid) {
      alert("Sucesso ao efetuar o Login!");
      window.location.href = "/pages/tela_inicial.html";
      
    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
});
