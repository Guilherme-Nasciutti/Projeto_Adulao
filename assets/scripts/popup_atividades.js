    function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    document.getElementById('activityForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Aqui você pode adicionar código para enviar os dados do formulário para o backend
        closePopup(); // Fecha o pop-up após o envio do formulário (você pode modificar isso conforme necessário)
    });
