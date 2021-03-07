// padrão middleware

const etapa1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const etapa2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const etapa3 = (ctx) =>{
    ctx.valor3  = 'mid3'
}

const exec = (ctx, ...middlewares) =>{
    const execEtapas = indice =>{
        middlewares && indice < middlewares.length &&
            middlewares[indice] (ctx, () => execEtapas(indice+1))
    }
    execEtapas(0)
}

/*function exec(ctx, ...middleware){
    for(let i = 0; i<middleware.length; i++){
        return middleware[i](ctx, () => middleware)
    }
}*/

const ctx = {}

exec(ctx, etapa1, etapa2, etapa3)

console.log(ctx)