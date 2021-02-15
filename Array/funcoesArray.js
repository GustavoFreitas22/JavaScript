const carros = ['celta', 'gol', 'corsa', 'kadet']

carros.pop() // kadet ta fora de linha! Removendo o ultimo elemento da lista 
console.log(carros)

carros.push('monza')
console.log(carros)

carros.shift()// celta ta fora! removendo o primeiro elemento
console.log(carros)

carros.unshift('palio') // adicionando na primeira posição do array
console.log(carros)

carros.splice(2, 0, 'fit', 'civic')// adicionando com splice
console.log(carros)

const carrosFodas = carros.slice(1) // retorna um novo array a partir do indice dá para limitar o range do array tb
console.log(carrosFodas)

const carrosFodas2 = carros.slice(1,5)
console.log(carrosFodas2)
