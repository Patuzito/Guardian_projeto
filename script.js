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


function displayText(buttonNumber) {
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");

    var videos = [
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video1.mp4", 
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video2.mp4", 
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video3.mp4"  
    ];

    // Troca o vídeo com base no número do botão clicado
    if (buttonNumber >= 1 && buttonNumber <= 3) {
        videoSource.src = videos[buttonNumber - 1];  // Atualiza o src do vídeo
        videoPlayer.load(); 
        videoPlayer.play();  
    }
}