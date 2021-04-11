// criar o evento load da página com a função start - carregamento completo
// criar a função (preventRefresh) para prevenir o refresh
// Na função preventRefresh, capturar o elemento e adicionar o evento com sua respectiva função
// Criar a função do Submit e usar os dados do event com o comando preventDefault()
// Usar o focus no elemento de input criando esse elemento de forma global e nulo

// Trabalhar o input, capturando o conteúdo através do evento keyup e o enter, utilizando o event
// Pegar o valor total quando o enter for digitado
// Criar a lista(vetor) que vai receber os nomes digitados
// Adicionar os nomes digitados na lista

// Criar a função para a div que vai receber os resultados
// pegar a div do HTML
// FOR cuidará dessa alteração - Criar variáveis para receber adicionar elementos necessários do HMTL pelo JS ( ul e Li's) - createElement
// Linkar os elementos criados aos seus repectivos filhos --- div -> ul -> li's

window.addEventListener('load', start);

var globalNames = [];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventRefresh();
  inputFocus();
}

function preventRefresh() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleRefresh);
}

function handleRefresh(event) {
  event.preventDefault();
}

function inputFocus() {
  inputName.focus();
  inputName.addEventListener('keyup', keyContent);
}

function keyContent(event) {
  //console.log(event);
  if (event.key === 'Enter') {
    var typedName = event.target.value;
    globalNames.push(typedName);
    render();
  }
}

function render() {
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  // Tudo que vai ser dinâmico tem que ser colocado dentro do laço de repetição
  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    console.log(currentName);

    var li = document.createElement('li');

    // Criação do botão com o X
    var button = document.createElement('button');
    button.textContent = 'X';

    // Criação do elemento que vai receber o conteúdo gerado no array
    var span = document.createElement('span');
    span.textContent = currentName;

    // li.textContent = currentName; - Apagado para dar lugar ao botão que vai receber o valor
    ul.appendChild(li);

    // Linkando o botão e o elemento que vai receber o nome do array
    li.appendChild(button);
    li.appendChild(span);
  }
  divNames.appendChild(ul);
  clearInput(); // Chamando a função para limpar depois de colocar os valores
}

// Função para zerar o input
function clearInput() {
  inputName.value = '';
  inputName.focus(); // Colocar o foco no input depois de apagar o conteúdo
}
