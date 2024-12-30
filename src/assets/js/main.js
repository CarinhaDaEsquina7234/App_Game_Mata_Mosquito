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
function randomPosition() {
// remover o mosquito anterio caso exista
if(document.getElementById("fly")) {
document.getElementById("fly").remove();
}

var positionY = Math.floor(Math.random() * height - 90);
var positionX = Math.floor(Math.random() * width - 90);

// Controle de posição para evitar resultado negativo
positionX = positionX < 0 ? 0 : positionX;
positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY);

// Criar o elemento html
var fly = document.createElement('img');
fly.src = '../assets/images/mosca.png';
fly.className = randomSize() + randomSide();

// Adiciona as posições do elemento em px(pixels)
fly.style.left = positionX + 'px';
fly.style.top = positionY + 'px';
fly.style.position = 'absolute';
fly.id = 'fly'

// Adiciona um elemento/filho no body
document.body.appendChild(fly);
}

// Executa a função randomPosition a cada 1000 milisegundos
console.log(setInterval( () => { randomPosition() }, 1000));

// Função responsável pelo tamanho do mosquito - 3 variações
function randomSize() {
    var breakpoint = Math.floor(Math.random() * 3);

    switch(breakpoint) {
        case 0:
            return 'flyOne';

        case 1:
            return 'flyTwo';

        case 2:
            return 'flyThree';
    }
}

// Função responsável pelo lado no qual o mosquito vai estar virado - 2 variações
function randomSide() {
    var breakpoint = Math.floor(Math.random() * 2);

    switch(breakpoint) {
        case 0:
            return ' left';

        case 1:
            return ' right';

    }
}