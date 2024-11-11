// HEADER //

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (lastScrollTop < currentScroll  ) {
        // Esconde o header ao rolar para baixo
        header.classList.add('visivel');
    } else {
        // Mostra o header ao rolar para cima
        header.classList.remove('visivel');
    }

   


    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
})

;

// SETA //

const setaBaixo = document.querySelector('.seta-baixo');
let scrollTimeout;

function mostrarSetaDepoisParar() {
    clearTimeout(scrollTimeout); 

    const limiteInferior = document.documentElement.scrollHeight - window.innerHeight;
    const isAtEnd = window.scrollY >= limiteInferior - 50; 
    if (!isAtEnd) {
        setaBaixo.classList.add('visivel'); 
    }

    
    scrollTimeout = setTimeout(() => {
        if (!isAtEnd) {
            setaBaixo.classList.remove('visivel'); 
        }
    }, 1000);
}

window.addEventListener('scroll', mostrarSetaDepoisParar);
