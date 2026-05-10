const NUMERO_WPP = "556282656761";  
const MENSAGEM = "Olá! Gostaria de agendar um atendimento.";

function abrirWhatsApp() {
    const url = `https://wa.me/${NUMERO_WPP}?text=${encodeURIComponent(MENSAGEM)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    
    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) btnTopo.addEventListener("click", abrirWhatsApp);
    
    const btnHero = document.getElementById("btnHero");
    if (btnHero) btnHero.addEventListener("click", abrirWhatsApp);
    
    const btnFinal = document.getElementById("btnFinal");
    if (btnFinal) btnFinal.addEventListener("click", abrirWhatsApp);
    
    const btnFloat = document.getElementById("btnFloat");
    if (btnFloat) btnFloat.addEventListener("click", abrirWhatsApp);
    
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
    
    const elementos = document.querySelectorAll(
    ".card-ajuda, .atendimento-card, .item-lista, .sobre-conteudo, .sobre-diferenciais, .cta-conteudo, .reflexao-texto, .hero-image, .sobre-foto"
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
            }
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px) scale(0.95)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});