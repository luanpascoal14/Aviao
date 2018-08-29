const Discord = require('discord.js');


module.exports.run = (bot, message, args) => {
    var AvatarUser = message.mentions.users.first() || message.author;
    var AvatarEmbed = new Discord.RichEmbed()
    .setTitle("Avatar de " + AvatarUser.username)
    .setImage(AvatarUser.displayAvatarURL)
    .setColor(0xFF0000)
    message.channel.send(AvatarEmbed);
}

module.exports.help = {
    name: "avatar"
}