console.log(typeof Array, typeof new Array, typeof [])

let aprov = new Array('bia', 'carlos', 'ana')

console.log(aprov)

aprov = ["bia", "ana", "carlos"]
console.log(aprov[0])
console.log(aprov[3])


aprov [3] = 'paulo'
aprov.push('larissa')

console.log(aprov.length)

aprov[10] = ('ramon')

console.log(aprov)

aprov.sort()
console.log(aprov)

delete aprov[3]

let num = [1,2,3,4,5]

// O splice serve para remover a partir de um elemento, e a partir do mesmo adcionar elementos: 
num.splice(1, 1, "Teste", "teste2")
console.log(num)