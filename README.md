# kurd.js
<a href="https:///dc" target="_blank"><img src="https://img.devsforum.net/tr/img/h1Z2X3.png" alt="Join our discord" width="256"></a><br>
**Support:** [](https:///dc) <br>
**NPM:** [](https://www.npmjs.com/package/kurd.js)<br>

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://vcodes.xyz/dc) address.*
- `npm i kurd.js`

```js
const kurd = require("kurd.js");
const dbl = new vKurd("TOKEN-HERE", client);

client.on("ready", async () => {
  dbl.serverCount();
  // console.log("Server count posted")
  
  let hasVote = await dbl.hasVoted("714451348212678658");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await dbl.search("779641401482805289")
  console.log(search)
  /*
  {
    avatar: 'https://cdn.discordapp.com/avatars/779641401482805289/8cf145d2189d76cc110101b7a69c6b20.webp',
    botID: '779641401482805289',
    username: 'Allegro',
    discrim: '2830',
    shortDesc: 'Cheer up your own server with 🎶',
    prefix: '! [changable]',
    votes: 31,
    ownerID: '714451348212678658',
    owner: 'Claudette',
    coowners: [ '' ],
    tags: [ 'Moderation', 'NSFW', 'Music' ],
    longDesc: longDesc,
    certificate: 'Certified'
  }
  */
});
```

