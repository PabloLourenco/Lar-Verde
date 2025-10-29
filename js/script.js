// -------------------------------
// Lar Verde - Funcionalidades JS
// -------------------------------

// --- Navegação SPA Simples (Single Page Application) ---
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("main section");

    // Oculta todas as seções, exceto a primeira
    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? "block" : "none";
        });
    }

    // Adiciona evento aos links do menu
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            showSection(targetId);
        });
    });

    // Mostra a primeira seção ao carregar
    if (sections.length > 0) showSection(sections[0].id);
});

// --- Validação de Formulário de Contato ---
document.addEventListener("submit", event => {
    const form = event.target;
    if (form.matches("#form-contato")) {
        event.preventDefault();

        const nome = form.querySelector("#nome");
        const email = form.querySelector("#email");
        const mensagem = form.querySelector("#mensagem");

        if (!nome.value || !email.value || !mensagem.value) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        // Validação simples de e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        if (!emailValido) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso! Agradecemos seu contato 💚");
        form.reset();
    }
});

// --- Animação leve nos botões ---
const botoes = document.querySelectorAll("button, .botao");
botoes.forEach(botao => {
    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.05)";
        botao.style.transition = "transform 0.2s ease";
    });
    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
    });
});
