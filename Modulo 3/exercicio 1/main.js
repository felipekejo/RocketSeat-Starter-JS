function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function(resolve, reject){
    setTimeOut(function(){

    return idade >=18 ? resolve() : reject();
  }, 2000);
});
}

checaIdade(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });