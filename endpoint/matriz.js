const express = require('express')
let router = express.Router()
const math = require('mathjs')

router.post('/sumar',(req,res)=>{

    let matrizA=req.body.matrizA
    let matrizB=req.body.matrizB
    let sumar=math.add(matrizA,matrizB)
    
    console.log(sumar)
    
    let matrices={
    resultado:sumar
    }
    res.send(matrices)
    })
    
router.post('/multiplicar',(req,res)=>{
    
    let matrizA=req.body.matrizA
    let matrizB=req.body.matrizB
    let multiplicar=math.dotMultiply(matrizA,matrizB)
    
    console.log(multiplicar)
    
    let matrices={
        resultado:multiplicar
    }
    res.send(matrices)
    })
router.post('/determinante',(req,res)=>{

        let determinar=math.det(req.body.matriz)
    
        console.log(determinar)
    
        determinante={
            resultado:determinar
        }
        res.send(determinante)
    
    })

module.exports = router