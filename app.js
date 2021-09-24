const express = require('express')
const app = express()
const math = require('mathjs')
const Port = process.env.PORT || 5000
app.use(express.json())

app.use('/numero', require('./endpoint/numero'))
app.use('/matriz', require('./endpoint/matriz'))

app.listen(Port,()=>{
    console.log('escuchando puerto 5000')
})