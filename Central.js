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
        logo: "Images/Guardian nome branco.png",
        image: "https://github.com/Patuzito/Guardian_projeto/blob/main/Imagens/Pag4/molier%20ilustrate.png"
    },
    2: {
        title: "Ajuda com Software",
        text: "A ajuda com software oferece recursos como manuais, tutoriais e suporte técnico para auxiliar os usuários na resolução de problemas e no uso eficiente dos programas. Ela visa melhorar a experiência do usuário, Esse suporte é essencial para aumentar a produtividade e a satisfação.",
        logo: "Images/Guardian nome branco.png",
        image: "Images/Guardian dedos soft 2.png"
    },
    3: {
        title: "Atualizações precisas",
        text: "Solucionamos As atualizações de software são essenciais para corrigir erros, melhorar a segurança e otimizar o desempenho do computador. Elas mantêm o sistema e os aplicativos atualizados, garantindo estabilidade e proteção contra vulnerabilidades. problemas simples até complexos.",
        logo: "Images/Guardian nome branco.png",
        image: "Images/Guardian atualiza.png"
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


function displayText(buttonNumber) {
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");

    var videos = [
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video1.mp4",
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video2.mp4",
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video3.mp4"
    ];

    if (buttonNumber >= 1 && buttonNumber < + 3) {
        videoSource.src = videos[buttonNumber - 1];
        videoPlayer.load();
        videoPlayer.play();
    }
    // Função para trocar os vídeos
    function changeVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;  // Incrementa o índice para o próximo vídeo
        videoSource.src = videos[currentVideoIndex];  // Atualiza o src do vídeo
        videoPlayer.load();  // Recarrega o vídeo
        videoPlayer.play();  // Reproduz o vídeo
    }

    // Chama a função a cada 5 segundos (5000 milissegundos)
    setInterval(changeVideo, 5000);


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
    const isAtEnd = window.scrollY >= limiteInferior - 50;

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
