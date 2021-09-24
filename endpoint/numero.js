const express = require('express')
let router = express.Router()
const math = require('mathjs')


router.post('/sumar',(req,res)=>{

    let suma=math.sum(req.body.numeros)
    console.log(suma)
    
    let sumar={
    resultado:suma
    }
    res.send(sumar)
    })
    router.post('/multiplicar',(req,res)=>{
    
    let multiply=math.prod(req.body.numeros)
    console.log(multiply)
    
    let multipli={
    resultado:multiply
    }
    res.send(multipli)
    })
    
    router.post('/restar',(req,res)=>{
    
    let numeroA=req.body.numeroA
    let numeroB=req.body.numeroB
    let restar=math.subtract(numeroA,numeroB)
    console.log(restar)
    
    let restare={
    resultado:restar
    }
    res.send(restare)
    })
    
    router.post('/dividir',(req,res)=>{
    
    let numeroA=req.body.numeroA
    let numeroB=req.body.numeroB
    let dividir=math.divide(numeroA,numeroB)
    console.log(dividir)
    if(numeroB !=0)
    {
        
    let divi={
    resultado:dividir
    }
    res.send(divi)
    }
    else
    {
    res.send("no se puede realizar la operacion")
    }
    })
    router.post('/extremos',(req,res)=>{

        let minimo=math.min(req.body.numeros)
        let maximo=math.max(req.body.numeros)
        console.log(minimo,maximo)
        let extremos={
            min:minimo,
            max:maximo
        }
        res.send(extremos)
    
    })

module.exports = router