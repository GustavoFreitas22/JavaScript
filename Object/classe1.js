class Lancamento{
    constructor(nome = 'generico', valor = 0){ // Basicamento a class é uma function Factory
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinan{
    constructor(mes, ano){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []

    }

    addLancamentos (...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l) )
    }
    sumario(){
        let valorCons = 0
        this.lancamentos.forEach(l => { valorCons += l.valor })

        return valorCons 
    }
}

const salario = new Lancamento("Salario", 45000)

const contaLuz = new Lancamento("Conta de Luz", -250)

const contas = new cicloFinan (1, 2)

contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())