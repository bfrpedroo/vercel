document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Consulta agendada!'); // Simulação de agendamento
    this.reset(); // Limpa o formulário
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('section'); // Adiciona a classe para animação

    section.addEventListener('click', () => {
        section.classList.toggle('visible'); // Alterna a classe 'visible' ao clicar
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('section'); // Adiciona a classe para animação
});
