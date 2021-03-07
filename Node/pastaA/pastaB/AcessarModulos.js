const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/*const moduloB = require('C:\Users\Pichau\Desktop\Estudo js\Node\moduloA.js')
console.log(moduloB.ola)*/ // Esta errado! Não fazer!

const protocolo = require('http')

// Basicamnete estou fazendo a importação de um modulo core do NODE

protocolo.createServer((req, res)=>{ 
    res.write("Salve, Salve!")
    res.end()
}).listen(8080)


const c = require('./pastaC/index')
console.log(c.ola2) 