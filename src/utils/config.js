export const api = 'http://172.16.4.41:1199'// base ip

export const requestConfig = (method, dados, token = null) => { //request config

    let config

    console.log(dados);

    config = {
        method: method,
        body: JSON.stringify({ document: dados }),
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}