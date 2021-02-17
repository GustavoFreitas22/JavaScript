function carro (velocidade = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico, usar This
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual  = velMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new carro(500,25)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// A função carro constroi o objeto ferrari, assim como uma classe em Java

