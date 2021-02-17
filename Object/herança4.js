function MeuObj(){

}

console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObj.prototype)

// Quando criamos um OBJ com uma func, o prototipo vai apontar para o func.prototype

MeuObj.prototype.nome = "teste"

console.log(obj1.nome)

obj2.nome = "Gustavo"

console.log(obj2.nome)