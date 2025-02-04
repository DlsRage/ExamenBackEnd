import { Router } from "express";
import { ControlBanco } from "../controller/controlBanco.js";
export const RoutasBanco = (model) =>{
    const rutas = Router()
    const bancoControl = new ControlBanco(model)
    
    rutas.get('/',bancoControl.getAll)
    rutas.post('/crear',bancoControl.create)
    return rutas
}