import notifys from "../utils/notifys"
import forms from "./forms"

class Actions
{
    constructor(ipc, data, emit) {
        this.ipc = ipc
        this.emit = emit
        this.data = data
        this.form = {
            ipcid: Math.floor(Math.random() * 9999).toString(),
            controller: '',
            params: {},
            search: {}
        }
    }

    build(data, action) {
        this.form = {
            ...this.form,
            ...forms.builddata(data),
            action: action
        }
    }

    feed(params) {
        this.data.target.params = params
        this.data.ui.modalProject = true
    }

    save() {
        this.build(this.data.target, 'save')
        const check = forms.checkform(this.form.params, this.data.rules ?? {})

        if (!check.isvalid) {
            this.emit('alert', notifys.warning(check.message))
            return
        }


        this.ipc.request('post', this.form, (resp) => {
            this.data.notify = notifys.notify(resp)
            this.data.ui.modalProject = !resp?.notify?.code == 200
        })

        this.list()
    }

    find(callback = null) {
        this.build(this.data.target, 'find')
        this.ipc.request('post', this.form, (data) => {
            this.data.params = data
            if (callback) {
                callback(data)
            }
        })
    }

    list(callback = null) {
        this.build(this.data.target, 'list')
        this.ipc.request('post', this.form, (data) => {
            this.data.datalist = data
            if (callback) {
                callback(data)
            }
        })
    }

    destroy() {
        this.build(this.data.target, 'destroy')
        this.ipc.request('post', this.form, (data) => {
            notifys.notify(data)
        })
        this.list()
    }
}

export default Actions
