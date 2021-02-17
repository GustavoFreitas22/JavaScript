class avo{
    constructor(nome, sobrenome = 'Freitas', idade){
        this.sobrenome = sobrenome
        this.idade = idade
        this.nome = nome
    }
}

class pai extends avo{
    constructor(corCabelo, alt, sobrenome){
        super(sobrenome)
        this.corCabelo = corCabelo
        this.alt = alt
    } 
}

class filho extends pai {
    constructor(corCabelo, profissao){
        super(corCabelo)
        this.profissao = profissao
    }
}

const filho01 = new filho
console.log(filho01.sobrenome)
const pai1 = new pai
pai1.corCabelo = "Roxo"
console.log(filho01.corCabelo)