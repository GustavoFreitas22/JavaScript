const global = "global"

function minhaFunction (){
    console.log(global)
}

function exec (){
    const global = "Local"
    minhaFunction()
}

exec()
