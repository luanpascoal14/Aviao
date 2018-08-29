const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let emojis = message.guild.emojis.map(a => a).join(' ')
    let servernome = message.guild.name
    let servericone = message.guild.iconURL
    
    try {
    let emojiembed = new Discord.RichEmbed()
    
    .setTitle(`Emojis do Servidor : **${servernome}** :`, )
    .setDescription(`${emojis}`)
    .setThumbnail(servericone)
    message.channel.send(emojiembed);
    
    } catch (err) {
        message.reply(`:nop: **Eu não consigo citar todos emojis do servidor ${servernome} !**`)
       }
}

module.exports.help = {
    name: "emojis"
}