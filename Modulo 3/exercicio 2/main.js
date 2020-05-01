const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const userGithub = [
  
];

function renderUserGithub(){
  listElement.innerHTML = '';
  for (user of userGithub){
    const userElement = document.createElement('li');
    const userText = document.createTextNode(user);

    userElement.appendChild(userText);
    listElement.appendChild(userElement);
  }
}
renderUserGithub();

function addUser(){
  const userText = inputElement.value;
  userGithub.push(userText);
  inputElement.value = '';
  renderUserGithub();
}
buttonElement.onclick = addUser;