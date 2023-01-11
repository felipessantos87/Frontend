const inputNome = document.querySelectorAll('.card h1');
const inputEmail = document.querySelectorAll('.card span');
const inputContato = document.querySelectorAll('.card strong');

async function getUserList() {
    try {
        const userList = await api.get('/users');

        for (let i = 0; i < inputNome.length; i++) {
            inputNome[i].innerHTML = userList.data[i].name
            inputEmail[i].innerHTML = userList.data[i].email
            inputContato[i].innerHTML = userList.data[i].phone
        }
    } catch (error) {
        console.log(error.data);
    }
}

getUserList();
