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

// PAGINA 3 //

function showText(option) {
    const displayArea = document.getElementById("displayArea");
    let text = "";

    switch (option) {
        case 1:
            text = "Tire uma foto do problema ou, se for muito detalhado, descreva o problema em palavras.";
            break;
        case 2:
            text = "Veremos o problema e discutiremos qual a melhor opção para melhorar o seu dispositivo, seja Software ou Hardware.";
            break;
        case 3:
            text = "Faremos todos os ajustes e diremos ao usuário o dia e a hora específica para retirar sua máquina.";
            break;
        default:
            text = "Selecione uma opção.";
    }

    displayArea.textContent = text;
}

// Função para exibir o texto correspondente ao botão clicado
function displayText(step) {
    const displayArea = document.getElementById("display-area3");
    
    // Conteúdo para cada etapa
    const stepContent = {
        1: "Tire uma foto do problema ou, se for muito detalhado, descreva o problema em palavras.",
        2: "Veremos o problema e discutiremos qual a melhor opção para melhorar o seu dispositivo, seja Software ou Hardware.",
        3: "Faremos todos os ajustes e diremos ao usuário o dia e a hora específica para retirar sua máquina."
    };

    // Atualizar o conteúdo da área de exibição
    displayArea.textContent = stepContent[step];
}

// TESTE PAGINA 2 //

function Image (onclick) {
     const BoxDisplay = document.getElementById("box-display");
     let img = "";

     switch (onclick) {
        case 1:
            img = "";

        case 2:
            img = "";

        case 3:
            img = "";
     }


}

