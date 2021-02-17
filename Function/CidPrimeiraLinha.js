// Formas de criar uma função:

// Forma Literal:
function fun(){}

// Armazenando uma função em varíavel:

const fun2 = function(){
    console.log("Teste")
}

fun2()

// armazenar em um array

const array = [function (){console.log("Teste")}]

// Atributos de obj :

const obj = {}
obj.falar = function(){return "Fala ae"}
console.log(obj.falar())
