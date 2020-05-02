const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');



function renderUserGithub(repositories){
  listElement.innerHTML = '';
  for (nameRepos of repositories){
    const userElement = document.createElement('li');
    const userRepos = document.createTextNode(nameRepos.name);

    userElement.appendChild(userRepos);
    listElement.appendChild(userElement);
  }
}
function renderLoading(loading){
  listElement.innerHTML = '';
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError(loading){
  listElement.innerHTML = '';
  var textElement = document.createTextNode('Erro!');
  var errorElement = document.createElement('li');

  errorElement.style.color = "#F00";

  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}


function addUser(){
  const userText = inputElement.value;
  if(!userText) return;
  renderLoading();

  axios.get(`https://api.github.com/users/${userText}/repos`)
  .then(function(response){
    renderUserGithub(response.data);
  })
  .catch(function(){
    renderError();
  })
  
  
}
buttonElement.onclick = addUser;

