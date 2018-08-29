const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports.run = (bot, message, args) => {
    if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
    if (!args.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! use ' + prefix + 'report (usuario) (motivo)')
    var canal = message.guild.channels.find("name", "reports");
    if (!canal) return;
    let RtIcon = message.mentions.users.first().displayAvatarURL;
    let ReportarEmbed = new Discord.RichEmbed()
    .setThumbnail(RtIcon)
    .setDescription("**Denuncia**", " ⠀")
    .setColor(message.member.displayColor)
    .addField("Nome: ", message.mentions.users.first().username)
    .addField("Motivo: ", args.slice(1).join(' '))
    .addField("Horario: ", message.createdAt)
    .addField("Por: ", message.author.username);
    
    message.delete();
    canal.send(ReportarEmbed);
    message.author.send('Sua denuncia foi enviada com sucesso!');
}

module.exports.help = {
    name: "report"
}