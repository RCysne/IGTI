// preventDefault - evitando o refresh da página

window.addEventListener('load', start);

var globalNames = [];

// Como preciso carregar a página primeiro com o start, coloco o input global,
// mas não pego os valores ainda, somente dentro da função que vou usar
var inputName = null;

var isEditing = false;
var currentIndex = null;

// Startando rodando com a prevenção do refresh
function start() {
  inputName = document.querySelector('#inputName');
  preventSubmit();
  activateInput();
}

// Pegando o elemento dos dados a serem enviados ao servidor e adicionando o evento do submit
function preventSubmit() {
  // Com o evento submit, recebo os dados(event), uso para prevenir o refresh com o preventDefault
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

// Colocar o focus no input
// Escutar as reações do input como exemplo a digitação
function activateInput() {
  // A função passa a receber como valor o parâmetro - event.targe.value - tudo dentro do newName
  function insertName(newName) {
    globalNames.push(newName);
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName; // Pegando a posição atual no array e alterando para o novo nome
    render(); // Alterando o estado, tem que renderizar novamente
  }

  function handleTyping(event) {
    // console.log(event); - Verificando as ações do evento keyup e analisando como trabalhar as informações
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      //var typedName = event.target.value; - criada uma função embaixo já que irá se repetir
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value); // Função que vai pegar esse parâmetro e colocar no newName
      }
      isEditing = false; // Depois da edição ela tem que ser desativada
      clearInput();
    }
  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}

function render() {
  // Criação do botão e seu ícone. Adição de uma classe para estilizar
  function createDeleteButton(index) {
    // Regras do botão
    // esse index assume o indice do botão escolhido

    function deleteName() {
      globalNames.splice(index, 1);
      // O splice remove o elemento com os parâmetros do local e a quantidade que quero remover
      // Como estou mexendo no estado do globalNames que é global, preciso renderizar novamente.
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'X';

    button.addEventListener('click', deleteName);

    return button;
  }

  function createSpan(name, index) {
    // index para trabalhar a localização no array na atualização
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    // Criação do elemento que vai receber o nome da lista(array)
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = currentName;

    span.addEventListener('click', editItem);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    // A cada incrementação, cria uma li, troca o texto e adiciona na ul
    var li = document.createElement('li');

    // Chamando função que administra o botão delete com CSS
    var button = createDeleteButton(i); //colocando o indice i para que no delete do botão ele assuma o index escolhido

    var span = createSpan(currentName, i); // Criando o parâmetro do indice para poder trabalhar nele na edição do nome

    // Linkando os elementos a lista
    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus(); // Colocar o foco depois de apagar o conteúdo
}
