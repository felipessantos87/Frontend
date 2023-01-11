const add = document.querySelector('.add-contact')
const modal = document.querySelector('.modal')
const modalDelete = document.querySelector('.modal-delete')
const modalNew = document.querySelector('.modal-new')
const btnDelete = document.querySelector('.btn-delete')
const btnCancel = document.querySelector('.btn-cancel')
const btnAdd = document.querySelector('.btn-add')
const btnClean = document.querySelector('.btn-clean')
const btnClose = document.querySelector('.btn-close')
const inputNome = document.getElementById('input-name')
const inputEmail = document.getElementById('input-email')
const inputPhone = document.getElementById('input-phone')
const trash = document.querySelectorAll('.trash')

trash.forEach(lixeira => {
    lixeira.addEventListener('click', (event) => {
        event.path.find((item2) => item2.id).id;
        modal.className = "modal flex";
        modalDelete.className = "modal-delete flex";
    })
});

add.addEventListener('click', (event) => {
    modal.className = "modal flex";
    modalNew.className = "modal-new flex";
});

btnDelete.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    modal.className = "modal none";
    modalDelete.className = "modal-delete none";
    
    return alert(`Contato deletado!`);
});

btnCancel.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    modal.className = "modal none";
    modalDelete.className = "modal-delete none";
});

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!nome.value) {
        return alert(`Preencha o campo Nome`);
    }
    if (!email.value) {
        return alert(`Preencha  o campo E-mail`);
        
    }
    if (!phone.value) {
        return alert(`Preencha  o campo Telefone`);

    }
    modal.className = "modal none";
    modalNew.className = "modal-new none";
    return alert(`Contato Adicionado!`);
});

btnClean.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    nome.value = "";
    email.value = "";
    phone.value = "";
});

btnClose.addEventListener('click', (event) => {
    modal.className = "modal none";
    modalNew.className = "modal-new none";
});