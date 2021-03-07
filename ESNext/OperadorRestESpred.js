const funcionario  = {
    nome: "Maria", 
    salario: 12365
}

const clone = {ativo: true, ...funcionario}

console.log(clone, funcionario)

const grupoA = ["Celta", "Romano", "Claudio"]
const grupoFinal = ["Pernabucano", "Argentino", ...grupoA]

console.log(grupoA, grupoFinal)