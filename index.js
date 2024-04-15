const { Client, RichPresence } = require("discord.js-selfbot-v13");
const express = require('express')
const server = express();
var date = new Date();
var calendar = {
  year: 'numeric',
  month: 'short', 
  day: 'numeric',
  timeZone: 'GMT',
  hour12: true
}

var dt = date.toLocaleDateString('en-ID', calendar);
let hour = date.getHours()
let convert = (hour + 7) % 24
let minute = date.getMinutes()
const mix = convert + ':' + minute;

// CUSTOMIZE YOUR CUSTOM RPC
var TYPE = "PLAYING"; // Change Type In Here, Example WATCHING, STREAMING, LISTENING, PLAYING AND COMPETING
var INSTAGRAM = "https://instagram.com/muss_thofa?igshid=NzZlODBkYWE4Ng==";
var NAME = "Ayang Flora"; // Change Name In Here
var DETAILS = "Flora Shafiq";
var STATE = "don't distrub"
var LARGEIMG = "https://cdn.discordapp.com/attachments/1182624301447393332/1224671071618465823/remix-e1e5ead7-81e5-4dc4-ab54-b7a5e50f32c7.png?ex=661e56d0&is=660be1d0&hm=716d6a19455ead76777bbc678c5ac2d5127ea725c88ce060774f78f89f721d56&";
var SMALLIMG ="https://cdn.discordapp.com/attachments/1182624301447393332/1224680199006982184/Hearts.gif?ex=661e5f50&is=660bea50&hm=9d3e45536c26d1362eebb38419690f536182602891faa3f6fc2361b3844da3fd&";

// DONT CHANGE THIS PART
const client = new Client({
  checkUpdate: false,
});
server.all('/', (req, res)=>{
    res.send("Hello World!")
})

client.on("ready", async() => {
  const r = new RichPresence()
    .setApplicationId('828955755616272424')
    .setType(`${TYPE}`)
    .setURL(`${INSTAGRAM}`)
    .setName(`${NAME}`)
    .setDetails(`${DETAILS}`)
    .setState(`${STATE}`)
    .setAssetsLargeImage(`${LARGEIMG}`)
    .setAssetsSmallImage(`${SMALLIMG}`)
    .setStartTimestamp(Date.now())
  client.user.setActivity(r.toJSON());
  
  console.log(`Succesfully Login To ${client.user.tag}

Activity Is Ready`) // Console "Client Is Ready!"
})
console.log("Have Problem?")
console.log("Join https://discord.gg/0rcadivision")
console.log("Contact @riku.xyz or @yagam1.")
client.on('debug', (a) => {
  if(a.startsWith( "Hit a 429" ))
    process.kill(1)
})

server.listen(3000, () => {
  console.log("Listening to Port:3000")
  client.login(process.env.TOKEN)
});