// Objects.values/ Objects.entreies/ Object.key

const obj = {
    a: 1,
    b: 2, 
    c: 3
}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal

const nome = "Gustavo"

const pessoa ={
    nome, 
    falar(){
        return `Olá, me chamo ${nome}`
    }
}

console.log(pessoa.falar())
