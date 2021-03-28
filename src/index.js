const axios = require('axios')


class API {
    static async hasVoted(bot, id) {
    const hasvotes = await axios.get(`https://vcodes.xyz/api/${bot}/voted/${id}`).then(a => a.data.hasvote)
    return await hasvotes
    }
    static async info(bot) {
    const infos = await axios.get(`https://vcodes.xyz/api/${bot}`).then(a => a.data)
    return await infos
    }
    static async search(value) {
    const results = await axios.get(`https://vcodes.xyz/api/search/${value}`).then(a => a.data)
    return await results
    }
}
module.exports = API
