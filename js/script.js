const NUMERO_WPP = "556282656761";  
const MENSAGEM = "Olá! Gostaria de agendar um atendimento.";

function abrirWhatsApp() {
    const url = `https://wa.me/${NUMERO_WPP}?text=${encodeURIComponent(MENSAGEM)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", function() {
    
    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) btnTopo.addEventListener("click", abrirWhatsApp);

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
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elementos.forEach(el => {
        el.classList.add("animar");
        observer.observe(el);
    });
});