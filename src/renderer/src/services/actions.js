import notifys from "../utils/notifys"

class Actions
{
    constructor(ipc, data) {
        this.ipc = ipc
        this.data = {
            controller: '',
            ipcid: Math.floor(Math.random() * 9999).toString(),
            params: {},
            search: {},
            ...data
        }
    }

    save() {
        this.data.action = 'save'
        this.ipc.request('post', this.data, (resp) => {
            notifys.notify(resp)
            this.list()
        })
    }

    find(callback = null) {
        this.data.action = 'find'
        this.ipc.request('post', this.data, (data) => {
            this.data.params = data
            if (callback) {
                callback(data)
            }
        })
    }

    list(callback = null) {
        this.data.action = 'list'
        console.log(this.data)
        this.ipc.request('post', this.data, (data) => {
            this.data.datalist = data
            if (callback) {
                callback(data)
            }
        })
    }

    destroy() {
        this.data.action = 'destroy'
        this.ipc.request('post', this.data, (data) => {
            notifys.notify(data)
            this.list()
        })
    }
}

export default Actions
