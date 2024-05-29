/*

    Descrição: Tela de validação do login para entrar na aplicação.

*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  // Definindo nome de usuário e senha para teste
  const usernameValid = "Joao";
  // const usernameValid = Nome de usuário que deverá ser checado no banco de dados para validação
  const passwordValid = "1234";
  // const passwordValid = Senha que deverá ser checado no banco de dados para validação

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificando se o nome de usuário e a senha estão corretos
    if (username === usernameValid && password === passwordValid) {
      alert("Sucesso ao efetuar o Login!");
      // Aqui você pode redirecionar o usuário para outra página, se necessário
      window.location.href = "tela_inicial.html";
      // Por exemplo: window.location.href = "pagina_logada.html";
    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
      // Limpa os campos de entrada para permitir que o usuário insira novas informações
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
});
