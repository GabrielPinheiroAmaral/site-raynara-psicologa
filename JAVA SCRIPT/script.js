// Número do WhatsApp (troque pelo seu)
const NUMERO_WPP = "5592999999999"; // Exemplo: 55 92 99999-9999
const MENSAGEM = "Olá! Gostaria de agendar um atendimento.";

// Função para abrir WhatsApp
function abrirWhatsApp() {
    const url = `https://wa.me/${NUMERO_WPP}?text=${encodeURIComponent(MENSAGEM)}`;
    window.open(url, "_blank");
}

// Configurar todos os botões quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    
    // Botão do topo
    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) btnTopo.addEventListener("click", abrirWhatsApp);
    
    // Botão do hero
    const btnHero = document.getElementById("btnHero");
    if (btnHero) btnHero.addEventListener("click", abrirWhatsApp);
    
    // Botão final
    const btnFinal = document.getElementById("btnFinal");
    if (btnFinal) btnFinal.addEventListener("click", abrirWhatsApp);
    
    // Botão flutuante
    const btnFloat = document.getElementById("btnFloat");
    if (btnFloat) btnFloat.addEventListener("click", abrirWhatsApp);
    
    // Scroll suave para navegação
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    
    // EFEITO CARROSSEL: elementos aparecem conforme scroll
    const elementos = document.querySelectorAll(
        ".card-ajuda, .atendimento-card, .item-lista, .sobre-conteudo, .sobre-diferenciais, .cta-conteudo, .reflexao-texto"
    );
    
    // Configurar o observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });
    
    // Aplicar estilo inicial e observar cada elemento
    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});