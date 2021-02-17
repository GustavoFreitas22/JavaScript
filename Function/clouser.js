// Clouser é o escopo criado quando uma função é declarada
// Isso permite a função visualizar e manipular variáveris externas à função

const x = "global"

function fora (){
    const x = "local"
    function dentro (){
        return x
    }
    return dentro
}

const minhaFunc = fora()

console.log(minhaFunc())