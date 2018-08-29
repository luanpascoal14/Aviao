const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first();
    if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(!membro) return message.reply("você não mencionou ninguém")
    if(membro.highestRole < message.member.highestRole) return message.reply('Você não pode kickar uma pessoa de cargo mais alto ou igual ao seu!');
    if(membro.highestRole === message.member.highestRole) return message.reply('Você não pode kickar uma pessoa de cargo mais alto ou igual ao seu!');
    if(!membro.kickable) return message.reply("Você não pode kickar essa membro")
    if(razao.length < 1) return message.reply("Coloque um motivo!")
    let KEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setColor(membro.displayColor)
    .setTitle('**PUNIÇÃO**')
    .setDescription('Tipo:', '**EXPULSAMENTO**')
    .addField('**Servidor**: ' + message.guild.name, '**Usuario**: ' + membro.displayName)
    .addField('**Horario**: ' + message.createdAt, '**Motivo**: ' + razao);
    membro.send(KEmbed)
    membro.kick()
    message.channel.send(KEmbed);
}

module.exports.help = {
    name: "kick"
}