
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});


function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const produto = document.getElementById('produto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !produto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const produtoTexto = {
        'futebol': 'Rede de Futebol',
        'volei': 'Rede de Vôlei',
        'basquete': 'Rede de Basquete',
        'tenis': 'Rede de Tênis',
        'protecao': 'Rede de Proteção',
        'personalizada': 'Rede Personalizada'
    };

    const textoWhatsApp = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${nome}
*Email:* ${email}
*Produto:* ${produtoTexto[produto]}
*Mensagem:* ${mensagem}`;

    const numeroWhatsApp = '5541991662971';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
    
    window.open(urlWhatsApp, '_blank');
}


document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const produto = document.getElementById('produto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !produto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

   
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    
    this.reset();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.produto-card, .galeria-item, .contato-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !validarEmail(this.value)) {
        this.style.borderColor = '#ef4444';
        this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    } else {
        this.style.borderColor = '#e5e7eb';
        this.style.boxShadow = 'none';
    }
});


function mascaraTelefone(telefone) {
    return telefone.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');
}


const telefoneInput = document.querySelector('input[type="tel"]');
if (telefoneInput) {
    telefoneInput.addEventListener('input', function() {
        this.value = mascaraTelefone(this.value);
    });
}


if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

