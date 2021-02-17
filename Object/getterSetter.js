const seuquencia = {
    _valor: 1, // Isso é uma boa pratica para deternminar objs internos
    get valor(){
        return this._valor++
    },
    set valor(valor){
        this._valor = valor
    }

}

console.log(seuquencia.valor)
seuquencia.valor = 3
console.log(seuquencia.valor)