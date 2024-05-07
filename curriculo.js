document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recupera os valores dos campos
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;

    // Gera o HTML do currículo
    var cvHTML = `
        <h2>${name}</h2>
        <p><strong>Contato:</strong> ${contact}</p>
        <h3>Formação Acadêmica</h3>
        <p>${education}</p>
        <h3>Experiência Profissional</h3>
        <p>${experience}</p>
        <h3>Habilidades</h3>
        <p>${skills}</p>
    `;

    // Insere o currículo gerado no elemento com id "cv-preview"
    document.getElementById('cv-preview').innerHTML = cvHTML;
});
