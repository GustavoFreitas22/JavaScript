const prod = new Object
prod.name = 'Mesa'
prod.marca = 'generico'
console.log(prod)
delete prod.marca
console.log(prod)
let carro = {
    modelo: "A3",
    marca: "Audi",
    Dono: {
        nome: "Gustavo",
        idade: 20,

    },
    condutores: [{
        nome: 'João',
        idade: 20
    }, {
        nome: "Ana",
        idade: 19
    }],

    valorSeguro(){
        return
    }


}


/*Note o Array com os objetos dentro dele*/