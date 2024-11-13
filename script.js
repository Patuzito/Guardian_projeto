

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

// Pagina 3 //

function displayText(buttonNumber) {
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");

    var videos = [
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video1.mp4", 
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video2.mp4", 
        "https://raw.githubusercontent.com/Patuzito/Guardian_projeto/main/Videos/video3.mp4"  
    ];

    // Troca o vídeo com base no número do botão clicado
    if (buttonNumber >= 1 && buttonNumber <+ 3) {
        videoSource.src = videos[buttonNumber - 1];  // Atualiza o src do vídeo
        videoPlayer.load(); 
        videoPlayer.play();  
    }
// Função para trocar os vídeos
function changeVideo() {
    // Atualiza o índice para o próximo vídeo, com um comportamento circular
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;  // Incrementa o índice para o próximo vídeo
    videoSource.src = videos[currentVideoIndex];  // Atualiza o src do vídeo
    videoPlayer.load();  // Recarrega o vídeo
    videoPlayer.play();  // Reproduz o vídeo
}

// Chama a função a cada 5 segundos (5000 milissegundos)
setInterval(changeVideo, 5000);

    
}

 