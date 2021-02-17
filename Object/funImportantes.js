const pessoa = {
    nome: 'Gustavo',
    idade: 2, 
    peso: 13
}
                                  // Objeto = conjunto de CHAVES + VALORES
console.log(Object.keys(pessoa)) // Estou pegando o nome da chave
console.log(Object.values(pessoa)) // Estou pegando o valor de cada chave 
console.log(Object.entries(pessoa)) // Traz as chaves e valores em forma de Array

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
});

// Definindo propriedades de um objeto.
// Primeiro o Objeto, o nome da propriedade, passando os parametros da propriedade
Object.defineProperty(pessoa, 'DtNascimento', {
    enumerable: true, 
    writable: false, 
    value: '27/01/2021'
})

// Obj.assign
const obj1 = {
    a: 1
}
const obj2 = {
    b: 2,
    c: 3
}
const dest = {
    d:4
}
Object.assign(dest, obj1, obj2)
console.log(dest)

// Vai unir todos os Objs em um unico unico destino! Isso por conta do Assign
