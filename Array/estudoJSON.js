const carros = [
    '{"modelo": "corsinha", "cor": "Amarelo", "prop": "MC Champingno"}'
]

const transform = carros => JSON.parse(carros)
const obj = carros.map(transform)

obj.cor = "vermelho"

console.log(obj)