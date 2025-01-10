import { where } from "sequelize"

class Controller
{
    constructor(model) {
        this.model = model
    }

    save(params) {

        if (params?.id) {
            return this.model.update(params, {where:{id:params.id}})
        }

        return this.model.create(params)
    }

    find(params) {
        return this.model.findOne({where:params})
    }

    list(params = null) {
        const where = params ? { where: params } : null
        return this.model.findAll(where)
    }

    destroy(params) {
        return this.model.destroy({where:params})
    }
}

export default Controller
