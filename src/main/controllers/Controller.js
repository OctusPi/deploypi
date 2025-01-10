import notifys from "../utils/notifys"

class Controller
{
    constructor(model) {
        this.model = model
    }

    save(params) {
        try {
            const exec = params?.id
                ? this.model.update(params, { where: { id: params.id } })
                : this.model.create(params)
            return exec.toJson()

        } catch (error) {
            return notifys.warning()
        }
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
