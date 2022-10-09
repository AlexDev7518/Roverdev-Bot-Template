module.exports = async client => {
    setTimeout(() => {
        client.guilds.cache.forEach(guild => {
          client.guilds.cache.get(guild.id).commands.set(client.arrayOfSlashCommands)
        })
       }, 500);
}

/************************************
 * Bot Owner: @Alexdev7518
 * Template Made By: discord.gg/roverdev
 * Everything is Setup for you Just add commands and it will work!
 ************************************/