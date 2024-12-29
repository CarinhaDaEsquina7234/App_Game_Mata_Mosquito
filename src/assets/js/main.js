var height = 0;
var width = 0;

// Função para ajustar as dimeesões da janela do browser
function adjustWindowSizeData() {

// Acessando o tamanho dos eixos x e y
height = window.innerHeight;
width = innerWidth;

console.log(height, width);
}

adjustWindowSizeData();

// Criando posições randômicas
var positionY = Math.floor(Math.random() * height - 90);
var positionX = Math.floor(Math.random() * width - 90);

// Controle de posição para evitar resultado 0
positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY);

// Criar o elemento html
var fly = document.createElement('img');
fly.src = '../assets/images/mosca.png';
fly.className = 'fly';
fly.style.left = positionX + 'px';
fly.style.top = positionY + 'px';
fly.style.position = 'absolute'
document.body.appendChild(fly);
