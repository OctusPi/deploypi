
function notify(status, msg, code){
    return { status, msg, code}
}

function success(msg = '') {
    const defineMsg = `Operação realizada com sucesso. ${msg}`
    return notify('success', defineMsg, 200)
}

function warning(msg, code = 400){
    return notify('warning', msg, code)
}

function danger(msg, code = 500){
    return notify('error', msg, code)
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
