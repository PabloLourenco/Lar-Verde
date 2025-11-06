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


// --------------------------------------------------------
// Funcionalidades de Acessibilidade e Otimização
// --------------------------------------------------------

// --- Navegação por teclado (Tab) ---
document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        document.body.classList.add("usando-teclado");
    }
});
document.addEventListener("mousedown", () => {
    document.body.classList.remove("usando-teclado");
});

// --- Modo Alto Contraste / Modo Escuro ---
const botaoContraste = document.createElement("button");
botaoContraste.innerText = "🌙 Modo Escuro / Claro";
botaoContraste.classList.add("botao-contraste");
botaoContraste.setAttribute("aria-label", "Alternar modo de contraste");
botaoContraste.style.position = "fixed";
botaoContraste.style.bottom = "20px";
botaoContraste.style.right = "20px";
botaoContraste.style.padding = "10px 15px";
botaoContraste.style.borderRadius = "10px";
botaoContraste.style.border = "none";
botaoContraste.style.cursor = "pointer";
botaoContraste.style.zIndex = "1000";

document.body.appendChild(botaoContraste);

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        localStorage.setItem("tema", "escuro");
        botaoContraste.innerText = "☀️ Modo Claro";
    } else {
        localStorage.setItem("tema", "claro");
        botaoContraste.innerText = "🌙 Modo Escuro";
    }
});

// --- Lembrar modo escolhido pelo usuário ---
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
        botaoContraste.innerText = "☀️ Modo Claro";
    }
});

// --- Estilos básicos do modo escuro ---
const estiloEscuro = document.createElement("style");
estiloEscuro.innerHTML = `
    body.modo-escuro {
        background-color: #121212;
        color: #f0f0f0;
        transition: background 0.3s ease, color 0.3s ease;
    }
    body.modo-escuro header, body.modo-escuro footer {
        background-color: #1e1e1e;
    }
    body.modo-escuro a {
        color: #90caf9;
    }
`;
document.head.appendChild(estiloEscuro);

// --- Acessibilidade: foco visível ao usar teclado ---
const estiloFoco = document.createElement("style");
estiloFoco.innerHTML = `
    .usando-teclado :focus {
        outline: 3px solid #00b894;
        outline-offset: 3px;
    }
`;
document.head.appendChild(estiloFoco);

