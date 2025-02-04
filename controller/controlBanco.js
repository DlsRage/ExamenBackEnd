export class ControlBanco{
    constructor(modelBanco){
        this.model = modelBanco
    }
    getAll = async (req,res) =>{
        const datos = await this.model.getAll()
        res.json(datos)
    }
    create = async (req,res) =>{
        const newB = req.body
        const data = await this.model.create(newB)
        return data
    }
}