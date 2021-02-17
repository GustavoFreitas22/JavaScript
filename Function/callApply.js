function getPreco(imposto = 0, moeda = "R$" ){
    return `${moeda} ${this.preco * (1*this.desc) * (1+imposto)}`

}

function produto(nome, preco, desc){
    return {
        nome,
        preco,
        desc,
        getPreco
    }
}

const notebook = produto("notebook", 2500, 0.15)
console.log(notebook.getPreco())

const carro = produto("Gol", 10000, 0.2)
console.log(getPreco.call(carro))

/*No call vc passa um parametro para function, no apply vc passa os parametros por um array [] */
