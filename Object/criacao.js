// Forma Literal

const obj1 = {
    valor1: '1'
}

// Por Object

const obj2 = new Object

// FUnções construtoras

function prod(nome, preco){
    this.nome = nome
    this.preco = preco
    const desconto = (preco) =>{
        return preco - 1
    }
}
/* O This deixa o atributo publico*/

//Função Factory

function criarFuncionario(nome, salario, faltas){
    return{
        nome, 
        salario, 
        faltas, 
        getSalario(){
            return(salario - (faltas*5))
        }
    }
}
const func = criarFuncionario("Maria", 1250, 4)
console.log(func.getSalario())

const func2 = criarFuncionario("Mario", 1500, 0)
console.log(func2)
func2.nome = "Teste2"
console.log(func2)


let carro  = new prod("teste", 150)
console.log(carro)
let moto = new prod
console.log(moto)
moto.nome = "Biz"
console.log(moto)