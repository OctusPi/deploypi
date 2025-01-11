
function notify(status, message, code) {
    return { notify: { status, message, code } }
}

function success(msg = '') {
    const defineMsg = `Operação realizada com sucesso. ${msg}`
    return notify('success', defineMsg, 200)
}

function warning(msg = '', code = 400) {
    const defineMsg = `Falha ao realizar operação. ${msg}`
    return notify('warning', defineMsg, code)
}

function danger(msg = '', , code = 500) {
    const defineMsg = `Erro interno contate o suporte. ${msg}`
    return notify('error', defineMsg, code)
}

function info(msg, code = 300){
    return notify('info', msg, code)
}

export default {
    success,
    warning,
    danger,
    info
}
