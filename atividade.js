// Função para limpar os campos do formulário
function clearFields() {
    document.getElementById('activityName').value = '';
    document.getElementById('day').value = '';
    document.getElementById('time').value = '';
    document.getElementById('professor').value = '';
    document.getElementById('participants').value = '';
}

// Função para cancelar o cadastro e redirecionar para outra página (ou ação desejada)
function cancelRegistration() {
    // Aqui você pode redirecionar para outra página, por exemplo:
    // window.location.href = 'pagina.html';
    console.log("Cadastro cancelado.");
}

// Manipulação do envio do formulário
document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const activityName = document.getElementById('activityName').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const professor = document.getElementById('professor').value;
    const participants = document.getElementById('participants').value;

    // Aqui você pode realizar ações adicionais, como enviar os dados para o servidor
    console.log("Nome da Atividade:", activityName);
    console.log("Dia da semana:", day);
    console.log("Horário:", time);
    console.log("Professor:", professor);
    console.log("Participantes:", participants);

    // Limpa os campos do formulário após o envio
    clearFields();
});