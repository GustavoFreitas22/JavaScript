const tec = new Map()

tec.set('React', { framework: false })
tec.set('Angular', { framework: true })

console.log(tec.get('React'))
console.log(tec.get('Angular'))

// Não pode ter valores repetidos
