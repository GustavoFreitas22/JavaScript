const pai = {
    nome: 'Pedro', 
    corCabelo: 'Preto'
}

const filha = Object.create(pai) // Passa o prototipo para o Obj


console.log(filha.__proto__ === pai)

const filha2 = Object.create(pai, {
    nome:{value: 'bia', writable: false, enumerable: true}, 
    idade: {value: 2, writable: true, enumerable: true}
})

console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? // Verifica se pertence o Obj ou veio por Herança
    console.log(key): console.log(`Por herança ${key}`)
}