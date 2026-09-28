// Lista de Aplicativos (Nome e URL)
const apps = [
    { nome: "Editor de Código", url: "https://code.visualstudio.com/" },
    { nome: "Arduino Web", url: "https://create.arduino.cc/editor" },
    { nome: "Google Sala de Aula", url: "https://classroom.google.com/" },
    { nome: "Corretor Online", url: "https://www.corrige.com/" },
    { nome: "GitHub", url: "https://github.com/" },
    { nome: "Scratch", url: "https://scratch.mit.edu/" },
    { nome: "mBlock", url: "https://mblock.makeblock.com/" },
    { nome: "Sistema de Presença", url: "https://www.google.com" }
];

// Lista de Ferramentas (Nome e URL)
const tools = [
    { nome: "Canva", url: "https://www.canva.com/" },
    { nome: "ChatGPT", url: "https://chat.openai.com/" },
    { nome: "Gemini", url: "https://gemini.google.com/" },
    { nome: "Genially", url: "https://genially.com/" },
    { nome: "Mentimeter", url: "https://www.mentimeter.com/" },
    { nome: "Padlet", url: "https://padlet.com/" },
    { nome: "Prezi", url: "https://prezi.com/" },
    { nome: "YouTube", url: "https://youtube.com/" }
];

// Função para criar os cards dinamicamente
function criarCards(lista, containerId) {
    const container = document.getElementById(containerId);
    
    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Adiciona o evento de clique para abrir o site em nova aba
        card.onclick = () => window.open(item.url, '_blank');
        
        card.innerHTML = `
            <h3>${item.nome}</h3>
            <span>Clique para abrir</span>
        `;
        
        container.appendChild(card);
    });
}

// Inicializa as listas assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    criarCards(apps, 'apps-grid');
    criarCards(tools, 'tools-grid');

    // Ação do botão do Banner Principal
    const btnInscricao = document.getElementById('btn-inscricao');
    if (btnInscricao) {
        btnInscricao.addEventListener('click', () => {
            window.open('https://www.google.com', '_blank');
        });
    }
});