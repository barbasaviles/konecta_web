module.exports = {
    devPort: 8095,
    sourceDir: 'src',
    publicDir: 'public',
    app: {
        name: 'konecta',
        description: '',
    },
    dev: {
        api_endpoint: 'http://localhost/konecta_api'
    },
    prod: {
        api_endpoint: 'http://prueba.konecta.com'
    },
    pwa: {
        color: {
            background: '#2196f3',
            theme: '#324148'
        },
        icon: 'assets/img/fire.png'
    }
};