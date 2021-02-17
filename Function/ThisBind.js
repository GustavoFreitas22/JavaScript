const pessoa = {
    saudações: "Olá",
    falar(){
        console.log(this.saudações)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
