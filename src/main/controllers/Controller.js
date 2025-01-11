import notifys from "../utils/notifys"

class Controller
{
    constructor(model) {
        this.model = model
    }

    save(data) {
        try {
            const exec = data?.id
                ? this.model.update(data.params, { where: { id: data.params.id } })
                : this.model.create(data.params)
            return exec.toJson()

        } catch (error) {
            return notifys.warning()
        }
    }

    find(data) {
        return this.model.findOne({where:data.search})
    }

    list(data = null) {
        const where = data.search ? { where: data.search } : null
        return this.model.findAll(where)
    }

    destroy(data) {
        return this.model.destroy({where:data.params})
    }
}

export default Controller
