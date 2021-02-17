// Object.preventExtension

// Basicamente essa função faz com que não seja possível adicionar um atributo ao Obj

const produto = Object.preventExtensions({
    nome: "Carro", preco: 23000, tag: "Promo"
})

console.log("Teste:", Object.isExtensible(produto))

produto.cor = "Vermelho"

console.log(produto)

// Object.seal
// Faz você conseguir mudar os valores mas sem adicionar nem deletar atributos
const pessoa = {
    nome: Julia,
    idade: 18,
    corDoCabelo: "azul"
}

Object.seal(pessoa)
console.log(pessoa)

pessoa.sobrenome = "Franco"
pessoa.nome = "Thais"
delete pessoa.idade

console.log(pessoa)

