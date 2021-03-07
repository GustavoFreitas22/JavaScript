console.log(this===global)
console.log(this === module.exports)
console.log(this===module)
console.log(this === exports)


function logThis(){
    console.log("Dentro da function")
    console.log(this===exports)
    console.log(this===global)
}

// Dentro da function this aponta para o global, fora ele aponta para exports

logThis()