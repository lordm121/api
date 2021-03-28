const axios = require('axios')


class API {
    static async hasVoted(bot, id) {
    const hasvotes = await axios.get(`https://vcodes.xyz/api/${bot}/voted/${id}`).then(a => a.data.hasvote)
    return await hasvotes
    }
}
module.exports = API