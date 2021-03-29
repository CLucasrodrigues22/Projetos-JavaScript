//importando modulo atraves de caminho relativo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//exemplo de mosulos padrão do nodeJS
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)