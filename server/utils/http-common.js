const AXIOS = require('axios');

const HTTP = AXIOS.create({
    baseURL: 'https://api.nytimes.com/',
    responseType: 'json',
    params: {
        ['api-key']: 'La8REAHDHLaXh48C5YAZ12uOAfYVD2V5'
    },
});

module.exports = HTTP;