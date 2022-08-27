const Discord = require('discord.js');

module.exports = async (bot, interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`../Commandes/${interaction.commandName}`);
        if (!command || !interaction.commandName) {
            interaction.reply("Pas de commande renseignée ! / Commande inconnue !");
        }
        else command.run(bot, interaction, interaction.options);
    }
}
