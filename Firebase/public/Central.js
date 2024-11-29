/* ==================================================
   FUNÇÕES
================================================== */


function GetID(value) {
    return document.querySelector(value)
}

/* ==================================================
   ANIMAÇÃO DE SCROLL
================================================== */


const elements = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
        } else {
            entry.target.classList.remove("visivel");
        }
    });
});

elements.forEach(element => myObserver.observe(element));


/* ==================================================
   PAGINA 2
================================================== */

const Buttons = [
    GetID("#B1"),
    GetID("#B2"),
    GetID("#B3")
];

const content = {
    1: {
        title: "Ajuda com Hardware",
        text: "A ajuda com hardware é fundamental para solucionar problemas em dispositivos como computadores, substituição de peças e manutenção preventiva. Esse suporte é essencial para evitar transtornos eaumentar a durabilidade dos dispositivos, seja para usuários domésticos ou empresas.",
        logo: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/Guardian%20nome%20branco.png?raw=true",
        image: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/molier%20ilustrate.png?raw=true"
    },
    2: {
        title: "Ajuda com Software",
        text: "A ajuda com software oferece recursos como manuais, tutoriais e suporte técnico para auxiliar os usuários na resolução de problemas e no uso eficiente dos programas. Ela visa melhorar a experiência do usuário, Esse suporte é essencial para aumentar a produtividade e a satisfação.",
        logo: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/Guardian%20nome%20branco.png?raw=true",
        image: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/Guardian%20dedos%20soft%202.png?raw=true"
    },
    3: {
        title: "Atualizações precisas",
        text: "Solucionamos As atualizações de software são essenciais para corrigir erros, melhorar a segurança e otimizar o desempenho do computador. Elas mantêm o sistema e os aplicativos atualizados, garantindo estabilidade e proteção contra vulnerabilidades. problemas simples até complexos.",
        logo: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/Guardian%20nome%20branco.png?raw=true",
        image: "https://github.com/Patuzito/Guardian_projeto/blob/main/Firebase/public/Imagens/Pag4/Guardian%20atualiza.png?raw=true"
    }
};

Buttons.forEach((Button, index) => {
    Button.addEventListener("click", () => {
        // Atualiza o conteúdo baseado no botão clicado
        const currentContent = content[index + 1]; // Ajuste para pegar o conteúdo correto (1, 2 ou 3)

        GetID("#content-title").innerText = currentContent.title;
        GetID("#content-text").innerText = currentContent.text;
        GetID("#content-logo").src = currentContent.logo;
        GetID("#content-image").src = currentContent.image;
        


    });
    
});


/* ==================================================
   PAGINA 3
================================================== */
const videoSources = {
    1: "https://github.com/Patuzito/Guardian_projeto/raw/refs/heads/main/Firebase/public/Videos/Video1.mp4",  
    2: "https://github.com/Patuzito/Guardian_projeto/raw/refs/heads/main/Firebase/public/Videos/Video2.mp4",  
    3: "https://github.com/Patuzito/Guardian_projeto/raw/refs/heads/main/Firebase/public/Videos/Video3.mp4"   
};

let currentVideo = 1;  // Inicializa o vídeo com o número 1
const videoPlayer = document.getElementById("videoPlayer");

// Select all the indicator elements
const indicators = document.querySelectorAll(".indicator");

window.onload = function() {
    playVideo(currentVideo);  // Inicia o vídeo inicial
    setInterval(changeVideo, 6000);  // Troca o vídeo a cada 6 segundos
};

function changeVideo() {
    currentVideo = (currentVideo % 3) + 1;  // Altera entre os vídeos 1, 2, 3
    playVideo(currentVideo);  // Reproduz o vídeo correspondente
}

function playVideo(videoNumber) {
    // Muda o src do vídeo para o vídeo correspondente
    if (videoSources[videoNumber]) {
        videoPlayer.src = videoSources[videoNumber];
        videoPlayer.load();  // Carrega o novo vídeo
        videoPlayer.play();  // Inicia a reprodução automaticamente
    }
    
    // Update active indicator
    updateActiveIndicator(videoNumber);
}

function updateActiveIndicator(activeIndex) {
    // Remove the 'active' class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });
    
    // Add the 'active' class to the current indicator
    if (indicators[activeIndex - 1]) {
        indicators[activeIndex - 1].classList.add("active");
    }
}


/* ==================================================
    HEADER
================================================== */


let lastScrollTop = 0;
const header = GetID('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        header.classList.add('visivel');
    } else {
        header.classList.remove('visivel');
    }

    lastScrollTop = Math.max(0, currentScroll);
});


/* ==================================================
    ANIMAÇÃO DE SETA
================================================== */

const setaBaixo = GetID('.seta-baixo');
let scrollTimeout;

function mostrarSetaDepoisParar() {
    clearTimeout(scrollTimeout);

    const limiteInferior = document.documentElement.scrollHeight - window.innerHeight;
    const isAtEnd = window.scrollY >= limiteInferior - 60;

    if (!isAtEnd) {
        setaBaixo.classList.add('visivel');
    } else {
        setaBaixo.classList.remove('visivel');
    }

    scrollTimeout = setTimeout(() => {
        if (!isAtEnd) {
            setaBaixo.classList.remove('visivel');
        }
    }, 1000); // (milissegundos)
}

window.addEventListener('scroll', mostrarSetaDepoisParar);

/* ==================================================
    PAGINA 4
================================================== */

const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('i');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        if (accordian.classList.contains('active')) {
            
            accordian.classList.remove('active');
            icon.style.transform = "rotate(0deg)";
            accordian.style.height = '50px';
            answer.style.maxHeight = null;
        } else {
            
            accordians.forEach(a => {
                a.classList.remove('active');
                const otherIcon = a.querySelector('i');
                const otherAnswer = a.querySelector('.answer');
                a.style.height = '50px'; 
                if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

           
            accordian.classList.add('active');
            icon.style.transform = "rotate(180deg)";
            accordian.style.height = (answer.scrollHeight + 50) + 'px';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

/* ==================================================
    PAGINA DE COMENTARIOS
================================================== */

let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const comments = document.querySelectorAll('.comment');
const commentWidth = document.querySelector('.comment').offsetWidth + 20;
const totalComments = comments.length;
const visibleComments = 3;

function updateCarousel() {
    const offset = -currentIndex * commentWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    comments.forEach((comment) => comment.classList.remove('center'));
    const centerIndex = currentIndex + Math.floor(visibleComments / 2);
    if (comments[centerIndex]) {
        comments[centerIndex].classList.add('center');
    }
}

function nextComments() {
    if (currentIndex < totalComments - visibleComments) {
        currentIndex++;
        updateCarousel();
    }
}

function prevComments() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

updateCarousel();



/* ==================================================
    MODO ESCURO
================================================== */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    // Se o checkbox for marcado, ativa o modo escuro
    if (chk.checked) {
        document.body.classList.add('dark');
        document.documentElement.style.setProperty('--blacktext', '#fff');  
        document.documentElement.style.setProperty('--Whitebackground', '#252323'); 
        document.documentElement.style.setProperty('--headerwhite', '#312F2F'); 
    } else {
        // Se o checkbox não estiver marcado, ativa o modo claro
        document.body.classList.remove('dark');
        document.documentElement.style.setProperty('--blacktext', '#000');  
        document.documentElement.style.setProperty('--Whitebackground', '#fff'); 
        document.documentElement.style.setProperty('--headerwhite', '#fff');  
    }
});

// Garantir que o modo seja o correto ao carregar a página (salvando a preferência no localStorage)
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        chk.checked = true;
        document.body.classList.add('dark');
        document.documentElement.style.setProperty('--blacktext', '#fff');
        document.documentElement.style.setProperty('--Whitebackground', '#333');
        document.documentElement.style.setProperty('--headerwhite', '#0000');
    } else {
        chk.checked = false;
        document.body.classList.remove('dark');
        document.documentElement.style.setProperty('--blacktext', '#000');
        document.documentElement.style.setProperty('--Whitebackground', '#fff');
        document.documentElement.style.setProperty('--headerwhite', '#fff');
    }
});
