let currentEditItem = null;

function removerItem(event) {
    event.preventDefault();
    event.target.closest('li').remove();
}

function addToList() {
    const nameInput = document.getElementById('nameInput').value;
    const fileInputElement = document.getElementById('fileInput');
    const file = fileInputElement.files[0];

    if (!nameInput || !file) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const fileURL = URL.createObjectURL(file);

    var li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center list-group-item-action';

    const linkContainer = document.createElement('div');
    linkContainer.className = 'link-container';

    const link = document.createElement('a');
    link.href = fileURL;
    link.textContent = nameInput;
    link.className = 'text-decoration-none';
    link.target = '_blank';

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

    document.getElementById('nameInput').value = '';
    fileInputElement.value = '';
}

function editarItem(li, link) {
    currentEditItem = li;

    document.getElementById('editNameInput').value = link.textContent;
    document.getElementById('editFileInput').value = '';

    var editModal = new bootstrap.Modal(document.getElementById('editModal'), {});
    editModal.show();
}

document.getElementById('saveChanges').addEventListener('click', () => {
    if (currentEditItem) {
        const newFileInputElement = document.getElementById('editFileInput');
        const newFile = newFileInputElement.files[0];
        const newNameInput = document.getElementById('editNameInput').value;

        if (!newNameInput) {
            alert('Por favor, preencha o campo do nome.');
            return;
        }

        const link = currentEditItem.querySelector('a');
        link.textContent = newNameInput;

        if (newFile) {
            const newFileURL = URL.createObjectURL(newFile);
            link.href = newFileURL;
        }

        var editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        editModal.hide();
    }
});