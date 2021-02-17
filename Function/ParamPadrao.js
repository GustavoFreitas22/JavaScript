// utilizando o OU para deixar o Parametro padrão

function exemplo01(a, b){
    a = a || 1
    b = b || 1

    return a = b
}

console.log(exemplo01(3), exemplo01(2, 3), exemplo01(0,0,)) // Se passar o valor 0 ele buga

// Jeito certo de fazer

function exemplo02(a = 1, b = 1){
    return a + b
}

console.log(exemplo02(2,3), exemplo02(0,0))
