function produto(nome, tipo, preco, qtdVendido){
    return{
        nome: nome,
        tipo: tipo,
        preco: preco,
        qtdVendido,

        vender(){
            this.qtdVendido += 1 
        }
    }
}

let prato = produto("Prato", "Quadrado", 25, 10)

prato.vender()
console.log(prato)
