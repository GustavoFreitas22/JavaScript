const armasAphelios = [
    {nome: "Sniper", habilidade: "Atirar longe pra porra", op: 2}, 
    {nome: "Arma vermelha que cura", habilidade: "Cura pra karai", op: 5}, 
    {nome: "Arma das bolinha", habilidade: "Estuna os cara tudo", op: 3}
]

//const soma = (arma, power) => arma + power

const soma2 = function(total, poder){
    return total + poder
}
const getHabilidade = arma => arma.habilidade
const getOp = arma => arma.op
const result2 = armasAphelios.map(getOp).reduce(soma2)
const result = armasAphelios.map(getHabilidade)
console.log(result2)