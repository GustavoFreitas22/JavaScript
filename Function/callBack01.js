const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprime (nome, indice){
    console.log(`${indice+1}, ${nome}`)
}

fabricantes.forEach(imprime)

/*forEach, faz uma chamada para cada novo indice dentro do objeto*/
/*Basicamente uma callback faz uma chamada de função após um evento acontecer */

