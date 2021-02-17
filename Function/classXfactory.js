class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(this.nome)
    }
}

const p1 = new Pessoa("gustavo")

p1.falar()
