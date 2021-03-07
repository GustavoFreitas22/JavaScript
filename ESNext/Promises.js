// Serve para processamento assincrono
 
function falarDepoisDe (segundos, frase){
    return new Promise((resolve, reject) =>{
        let tempo = segundos * 1000
        setTimeout(() =>{
            resolve(frase)
        }, segundos*1000)
        if(tempo>5000){
        reject(tempo)
        }
    })
}

falarDepoisDe(6, "Teste, da promessa concluido")
    .then(frase => frase.concat("!!!"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(`Erro timeout ${e} ms`))