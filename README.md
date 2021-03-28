# vcodes.js
<a href="https://vcodes.xyz/dc" target="_blank"><img src="https://img.devsforum.net/tr/img/h1Z2X3.png" alt="Join our discord" width="256"></a><br>
**Support:** [https://vcodes.xyz/dc](https://vcodes.xyz/dc) <br>
**NPM:** [npmjs.com/package/vcodes.js](https://www.npmjs.com/package/void.nsfw)<br>

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://vcodes.xyz/dc) address.*
- `npm i vcodes.js`

## Getting Started
- `const vc = require("vcodes.js")`

# Has Voted
```json
{
 "user": "",
 "hasvote": "false/true"
}
```
```js
let a = await vc.hasvoted(botID, userID);
if(a.error) {
console.log("Error: "+a.message)
} else {
if(!a) { 
console.log("vote pls")
} else {
console.log("your voted")
}
}
```


# Bot Information
```json
{
 "tags": [""],
 "coowners": [""],
 "votes": "",
 "botID": "",
 "ownerID": "",
 "ownerName": "",
 "username": "",
 "discrim": "",
 "avatar": "",
 "longDesc": "",
 "shortDesc": "",
 "prefix": "",
 "certificate": "",
 "premium": "",
 "status": ""
}
```
```js
let b = await vc.info(botID);
if(b.error) {
console.log("Error: "+b.message)
} else {
console.log(`
{
 "tags": ${b.tags},
 "coowners": ${b.coowners},
 "votes": ${b.votes},
 "botID": ${b.botID},
 "ownerID": ${b.ownerID}
}
`)
}
```

# Bot Search
```json
{
  "botID": "",
  "votes": "",
  "owner": "",
  "ownerID": "",
  "coowners": []
}
```
```js
let b = await vc.search(args[0]);
 let result;
  if(b.error) {
  console.log(`
  "error": true,
  "message": "${b.message}",
  "errorcode": ${b.errorcode}
  `)  
  } else {
  console.log(`
  "botID": "${b.botID}",
  "votes": "${b.votes}",
  "owner": "${b.owner}",
  "ownerID": "${b.ownerID}",
  "coowners": ["${b.coowners}"]
  `)
  }
```
