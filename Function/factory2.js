function createAnimal(tipo, qtdPatas, tamanho){
    return{
        tipo, 
        qtdPatas,
        tamanho
    }
}

let cachorro = createAnimal("mamifero", 4, "Grande")

console.log(cachorro)
console.log(typeof cachorro)