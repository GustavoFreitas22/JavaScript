const formas = ['circulo', 'quadrado', 'losangulo', 'triangulo']

/*function paraCada(formas){
    for(let i = 0; i<formas.length; i++){
        console.log(`${i +1}) ${formas[i]}`)
    }   
}

paraCada(formas)
*/
// Forma mostrada no curso:

Array.prototype.forEach2 = function(callbak){
    for(let i = 0; i<this.length; i++){
        callbak(this[i], i, this)
    } 
}

formas.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})