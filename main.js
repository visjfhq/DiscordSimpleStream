const Discord = require("discord.js")
const fs = require("fs")
const { white, green, red } = require('colors')
const { token, status, url } = require("./data.json")

const client = new Discord.Client()



client.on("ready", async() => {
    console.log(`[INFO]`.green + ` Le stream`.white + ` a commencé.`.green + `\n Discord Simple Stream Tool by`.white +  ` "0x38" Noro`.red + ` & `.white + `Xtasyy`.red)
    client.user.setActivity(status, {type: 'STREAMING', url: url})
    client.user.setStatus('online')
})


client.login(token)
