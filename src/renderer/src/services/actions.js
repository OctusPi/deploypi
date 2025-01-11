import notifys from "../utils/notifys"
import forms from "./forms"

class Actions
{
    constructor(ipc, data) {
        this.ipc = ipc
        this.data = data
        this.form = forms.builddata( {
            ipcid: Math.floor(Math.random() * 9999).toString(),
            controller: '',
            params: {},
            search: {},
            ...data?.target ?? {}
        })
    }

    save() {
        this.form.action = 'save'
        this.ipc.request('post', this.form, (resp) => {
            this.data.notify = notifys.notify(resp)
            this.data.ui.modalProject = !!resp?.code != 200
        })
        this.list()
    }

    find(callback = null) {
        this.form.action = 'find'
        this.ipc.request('post', this.form, (data) => {
            this.data.params = data
            if (callback) {
                callback(data)
            }
        })
    }

    list(callback = null) {
        this.form.action = 'list'

        this.ipc.request('post', this.form, (data) => {
            this.data.datalist = data
            if (callback) {
                callback(data)
            }
        })
    }

    destroy() {
        this.form.action = 'destroy'
        this.ipc.request('post', this.form, (data) => {
            notifys.notify(data)
            this.list()
        })
    }
}

export default Actions
