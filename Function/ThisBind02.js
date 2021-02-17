function Pessoa(){
    this.idade = 0 
    const self = this
    setInterval(function (){
        self.idade ++
        console.log(self.idade)
    }/*bind(this)*/, 1000)
}
new Pessoa   // como quem está disparando a função é um temporizador, o this muda

// CTRL + Alt + M = parar Execução

// colocar a variavel Self recebendo a instacia de This, o This não varia
