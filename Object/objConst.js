const pessoa = {nome: "João"}
pessoa.nome = "Gustavo"
console.log(pessoa)

/*Isso dá erro por Pessoa ser uma const*/
//pessoa = {nome: "ana"}

Object.freeze(pessoa)

// A partir de agora o não podemos fazer mais alterações em pessoa

pessoa.nome = "maria"
console.log(pessoa)

