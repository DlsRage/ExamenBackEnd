import express from 'express'
import cors from 'cors'
import { RoutasBanco } from './Rutas/banco.js'
import { Banco } from './model/bancoModel.js'
const app = express()
app.use(express.json())
app.use(cors()) 
app.use('/api/banco',RoutasBanco(Banco))


const PORT = process.env.PORT ?? 3000
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})