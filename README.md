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
 "user": userID,
 "hasvote": false/true
}
```
```js
let a = await vc.hasvoted(botID, userID);
if(!a) { 
console.log("vote pls")
} else {
console.log("your voted")
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
let a = await vc.hasvoted(botID, userID);
if(!a) { 
console.log("vote pls")
} else {
console.log("your voted")
}
```
