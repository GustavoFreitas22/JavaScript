const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 1', function(){
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log("Cancelado!")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 18
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Tarefa 2")
})

