// Não aceita repetição && não indexa

const times = new Set()

times.add('Vasco')
times.add('Flamengo')
times.add('Fluminence')
times.add('Botafogo')
//times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Botafogo')
console.log(times.has('Botafogo'))