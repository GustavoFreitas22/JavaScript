const aprovados = ['gustavo', 'giovanni', 'raquel', 'renan', 'bia']

aprovados.forEach(function(nome, ind){
    console.log(`${ind + 1}) ${nome}`)
})

const exibirAprov = aprovados => {
    console.log(aprovados)
}

aprovados.forEach(exibirAprov)