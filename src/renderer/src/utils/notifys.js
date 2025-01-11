
function notify(data) {
    if (data?.notify) {
        return { show:true, data:data.notify }
    }

    return { show: false, data: {} }
}


export default {
    notify
}
