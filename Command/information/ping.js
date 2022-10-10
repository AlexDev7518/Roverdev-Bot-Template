const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports.prefixRun = async (client, message, args, cmdUser,prefix) => {
}
module.exports.slashRun = async (interaction, client) => {
}

module.exports.conf = {
     Prefix: {
        aliases: ["latency"],
        enabled: true,
        ownerOnly: false,
        AdminOnly: false,
        userPermissions: [],
        cooldown: "10s"
     },
     Slash: {
        enabled: true,
        ownerOnly: false,
        AdminOnly: false,
        userPermissions: [],
        timeout: 50,
     }
}

module.exports.help = {
      Prefix: {
        name: "ping",
        category: "infomation",
        usage: "ping",
        description: "Bot Ping",
      },
      Slash: {
        name: "ping",
        description: "Get bot speed",
        category: "general",
      }
}

/************************************
 * Bot Owner: @Alexdev7518
 * Template Made By: discord.gg/roverdev
 * Everything is Setup for you Just add commands and it will work!
 ************************************/
