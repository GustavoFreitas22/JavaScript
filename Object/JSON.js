const obj = {
    a: 1, 
    b:2, 
    c:3,
    soma(){
        return a+b+c
    }
}

// funções não são passadas por JSON

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) errado

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

/* Para ser um JSON tem que começar com aspás simples logo depois as chaves, os atributos estar entre aspás duplas. Para uma String, aspás duplas tb
*/

console.log(JSON.parse('{"fala": "Som de passáros", "num": 258}'))