
function notify(data) {
    if (data.notify) {
        return {
            show: true, notify: {
                status: data.notify.status,
                message: data.notify.message,
                code: data.notify.code
            }
        }
    }

    return {show: false, notify: {}}
}

function success(msg = '') {

    const defineNotify = {
        notify: {
            status: 'success',
            message: `Operação realizada com sucesso. ${msg}`,
            code: 200
        }
    }

    return notify(defineNotify)
}

function warning(msg = '', code = 400) {

    const defineNotify = {
        notify: {
            status: 'warning',
            message: `Falha ao realizar operação. ${msg}`,
            code: code
        }
    }

    return notify(defineNotify)
}

function danger(msg = '', code = 500) {

    const defineNotify = {
        notify: {
            status: 'error',
            message: `Erro interno contate o suporte. ${msg}`,
            code: code
        }
    }

    return notify(defineNotify)
}

function info(msg, code = 300) {
    const defineNotify = {
        notify: {
            status: 'error',
            message: msg,
            code: code
        }
    }
    return notify(defineNotify)
}

export default {
    notify,
    success,
    warning,
    danger,
    info
}
