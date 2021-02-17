// Cadeia de Prototipos

const avo = {
    cabelo: 'Castanho',
    corPele: 'Negro'
}

const pai = {
    __proto__: avo,
    hairstyle: 'Blackzão bolado',
    musico: true
}

const filho = {
    __proto__: pai,
    tamanho: 1.80,
    musico: false
}

console.log(filho.corPele, filho.musico)

const carro = {
    velAtual: 0,
    velMax: 260,
    acelara(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} KM/H de um total de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'FFX',
    velMax: 354

}

const volvo = {
    modelo: "v40",
    status(){
        return `O nosso ${this.modelo}, está a ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Primeiro o Obj e depois o prototipo
Object.setPrototypeOf(volvo, carro)

ferrari.acelara(120)

console.log(ferrari.status())
console.log(volvo.status())