// Script para funcionalidade das abas de conteúdo
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para abas de conteúdo
    const contentButtons = document.querySelectorAll('.content-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    if (contentButtons.length > 0) {
        contentButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                contentButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Oculta todas as seções de conteúdo
                contentSections.forEach(section => section.classList.remove('active-content'));
                
                // Mostra a seção de conteúdo correspondente
                const contentId = this.getAttribute('data-content');
                document.getElementById(contentId).classList.add('active-content');
            });
        });
    }
    
    // Validação simples do formulário de contato
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            let isValid = true;
            
            // Validação do nome
            if (nameInput.value.trim() === '') {
                alert('Por favor, preencha seu nome.');
                isValid = false;
            }
            
            // Validação do email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                alert('Por favor, insira um email válido.');
                isValid = false;
            }
            
            // Validação da mensagem
            if (messageInput.value.trim() === '') {
                alert('Por favor, escreva sua mensagem.');
                isValid = false;
            }
            
            if (isValid) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
            }
        });
    }
});
