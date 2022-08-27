const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "ping",
    description: "Permet de voir le ping du bot",
    dm: true,
    permission: "Aucune",

    async run(bot, message) {
        const pingEmbed = new EmbedBuilder()
            .setTitle("Ping")
            .setDescription(`Pong ! 🏓\n\nLe ping du bot est de \`${bot.ws.ping}ms\``)
            .setColor("Random")
            .setTimestamp()
            .setThumbnail("https://c.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif")
            .setFooter({text: "Commande : ping", iconURL: bot.user.displayAvatarURL({dynamic: true})});
        await message.reply({embeds: [pingEmbed]});
    }
}