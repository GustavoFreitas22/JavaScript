// A herança em JS funciona na base de hierarquia de Prototipos, que vai trazendo as informações conforme a necessidade
const ferrari = {
    modelo: "f40",
    VeloMax: 320
}

const volvo = {
    modelo: "V40",
    VeloMax: 209
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

