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
function showVideo(option) {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");

  
    let videoUrl = "";

    switch (option) {
        case 1:
            videoUrl = "https://youtu.be/6eR8AzL-PYk?si=IAXte_uvLjph5KFf"; 
            break;
        case 2:
            videoUrl = "video2.mp4"; 
            break;
        case 3:
            videoUrl = "video3.mp4"; 
            break;
        default:
            videoUrl = ""; 
    }

    if (videoUrl) {
        videoSource.src = videoUrl;
        videoPlayer.load(); 
        videoPlayer.style.display = "block"; 
    } else {
        videoPlayer.style.display = "none"; 
    }
}
