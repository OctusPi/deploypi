import models from './models'

class Controller {

    constructor(data) {
        this.model = data?.model
        this.action = data?.action
        this.ipcid = data?.ipcid
        this.params = data?.params
    }

    async query() {

        try {
            let stm = null
            const md = models[this.model]

            switch (this.action) {
                case 'find':
                    return  await md.findOne()
                case 'list':
                    return await md.findAll()
                case 'where':
                    return await md.findAll({where:this.params})
                case 'save':
                    stm = await md.create(this.params)
                    return await stm.toJson()
                case 'update':
                    stm = await md.update(this.params, {where:this.params?.where})
                    return await stm.toJson()
                case 'destroy':
                    return await md.destroy({where:this.params})
                default:
                    return stm
            }

        } catch (error) {
            console.log(error)
        }

    }


}

export default Controller
