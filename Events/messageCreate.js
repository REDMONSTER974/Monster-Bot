const Discord = require("discord.js")

module.exports = async (bot, message) => {

    let prefix = "²"

    let messageArry = message.content.split(" ")
    let commandName = messageArry[0].slice(prefix.length)
    let args =  messageArry.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let command = require(`../Commandes/${commandName}}`)
    if(!command) return message.reply("Y a pas de commande")

    command.run(bot, message, args)
} 