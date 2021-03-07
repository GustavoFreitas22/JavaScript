const fs = require('fs')

const carro = {
    marca: "KIA",
    modelo: "Soul",
    motor: "2.0",
    qtdPortas: 4,
    zeroKM: true
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(carro), err =>{
    console.log(err || "Arquivo salvo!")
})