function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Event listener para o formulário
document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar código para enviar os dados do formulário para o backend
    closePopup(); // Fecha o pop-up após o envio do formulário (você pode modificar isso conforme necessário)
});