let currentEditItem = null;

function removerItem(event) {
  // Prevenir o comportamento padrão do clique
  event.preventDefault();
  // Remover o item de lista completo (li)
  event.target.closest('li').remove();
}

function addToList() {
  // Obter os valores dos inputs
  const nameInput = document.getElementById('nameInput').value;
  const fileInputElement = document.getElementById('fileInput');
  const file = fileInputElement.files[0];

  // Verificar se os campos não estão vazios
  if (nameInput === '' || fileInput === '') {
    alert('Por favor, preencha ambos os campos.');
    return;
  }

  const fileURL = URL.createObjectURL(file);

  // Criar um novo item de lista (li)
  var li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center list-group-item-action';

  const linkContainer = document.createElement('div');
  linkContainer.className = 'link-container';

  // Criar um link e adicionar a lista
  const link = document.createElement('a');
  link.href = fileURL;
  link.textContent = nameInput;
  link.className = 'text-decoration-none';
  link.target = '_blank';

  // Criar o botão de remoção e edição
  const botaoEditar = document.createElement('button');
  botaoEditar.type = 'button';
  botaoEditar.className = 'btn btn-outline-primary ms-2';
  botaoEditar.innerHTML = '<i class="bi bi-pencil-fill"></i>';
  botaoEditar.addEventListener('click', () => editarItem(li, link));

  const botaoRemover = document.createElement('button');
  botaoRemover.type = 'button';
  botaoRemover.className = 'btn btn-outline-danger ms-2';
  botaoRemover.innerHTML = '<i class="bi bi-trash3-fill"></i>';
  botaoRemover.addEventListener('click', removerItem);

  linkContainer.appendChild(link);
  li.appendChild(linkContainer);
  li.appendChild(botaoEditar);
  li.appendChild(botaoRemover);

  const list = document.getElementById('list');
  list.insertBefore(li, list.firstChild);
  //document.getElementById('list').appendChild(li);

  document.getElementById('nameInput').value = '';
  fileInputElement.value = '';
}



