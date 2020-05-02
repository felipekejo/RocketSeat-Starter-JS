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



function addUser(){
  const userText = inputElement.value;
  axios.get(`https://api.github.com/users/${userText}/repos`)
  .then(function(response){
    renderUserGithub(response.data);
  })
  .catch(function(error){
    console.log(error);
  })
  inputElement.value = '';
  
}
buttonElement.onclick = addUser;

