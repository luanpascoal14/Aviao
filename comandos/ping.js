const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var pingembed = new Discord.RichEmbed()
    .setDescription(`:ping_pong: **PONG!**`)
    .setColor('0x64fc00')
    .addField(`Seu ping é de aproximadamente **${Math.round(bot.ping)}ms**!`, ' ⠀')
    .setAuthor(message.author.username, message.author.displayAvatarURL);
    message.delete();
    message.channel.send(pingembed)
}

module.exports.help = {
    name: "ping"
}