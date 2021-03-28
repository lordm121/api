const axios = require('axios')


class API {
    static async search(value) {
    const results = await axios.get(`https://vcodes.xyz/api/search/${value}`).then(a => a.data)
    return await results
    }
}
module.exports = API