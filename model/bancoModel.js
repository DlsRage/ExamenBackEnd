import { banco } from "../data/banco.js"
let bancobase = banco
export class Banco {
    static  getAll = () =>{
        return bancobase
    }
    static create = (newBanco) =>{
        const ultimo = bancobase[bancobase.length - 1]
        const id = ultimo.id + 1
        const newData = {
            id: id,
            ...newBanco
        }
        bancobase.push(newData)
        return newBanco
    }
}