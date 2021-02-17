function Aula(nome, videoID){
    this.Aula = nome
    this.videoID = videoID
}

const aula01 = new Aula("Boa vindas",1)
const aula02 = new Aula("Intro", 2)

// Simulando o NEW

function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula03 = novo(Aula, "Teste", 3)
console.log(aula03)
