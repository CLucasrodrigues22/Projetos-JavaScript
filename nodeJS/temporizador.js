const schedule = require('node-schedule')

//criando um temporizador usando o schedule
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 3', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 
//parando o tamporizador
setTimeout(function() {
    tarefa1.cancel()
    console.log('Tarefa finalizada')
}, 20000);


//executando o temporizador atraves de regras
const regra = new schedule.RecurrenceRule() //instanciando o RecurrenceRule
regra.dayOfWeek = [new schedule.Range(1,5)] //definindo os dias da semana que será executado
regra.hour = 14 //definindo o horário que será executado
regra.secund = 30 //definindo o segundo inicial para iniciar a função

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})