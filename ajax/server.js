const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const multer = require('multer')

const storage = multer.diskStorage({
    //local onde será salvo o arquivo
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    //novo nome do arquivo
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.send('Concluído com sucesso.')
    })
})



app.listen(8080, () => console.log('Executando...'))