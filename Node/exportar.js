console.log(module.exports === this)

console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = 10

console.log(module.exports)

// Independenete de mudar o exports, sempre vai exportar o Module.exports

module.exports = {
    teste: "Mec trab!"
}