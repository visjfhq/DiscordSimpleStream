const Discord = require("discord.js")
const fs = require("fs")
const { white, green, red } = require('colors')
const { token, status, url } = require("./data.json")

const client = new Discord.Client()



client.on("ready", async() => {
    console.log(`[INFO]`.green + ` Le stream`.white + ` a commencé.`.green + `\n Discord Simple Stream Tool by`.white +  ` "0x38" Noro`.red + ` & `.white + `tactic4ll.`.red)
    client.user.setActivity(status, {type: 'STREAMING', url: url})
    client.user.setStatus('online')
})

client.on("guildCreate", guild => {
    console.log(`[INFO]`.green + ` Vous avez rejoint `.white + `${guild.name}`.green)
})

client.on("guildDelete", guild => {
    console.log(`[INFO]`.red + ` Vous avez quitté `.white + `${guild.name}`.red)
})

client.on("messageDelete", message => {
    let chanName;
    if(message.channel.type == 'dm'){
        chanName = 'DM'
    } else {
        chanName = message.guild.name
    }
  console.log(`[INFO]`.red + ` Message delete dans:`.white + ` ${chanName}`.red + `\n Contenu du message supprimé: `.white + `${message.content}`.red + `\n Auteur du message supprimé: `.white + `${message.author.username}`.red)
})

client.login(token)
