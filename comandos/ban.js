const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    var razao = msgs.slice(1).join(" ")
    var membro = message.mentions.members.first();
    if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(!membro) return message.reply("você não mencinou ninguém")
    if(membro.highestRole < message.member.highestRole) return message.reply('Você não pode banir uma pessoa de cargo mais alto ou igual ao seu!');
    if(membro.highestRole === message.member.highestRole) return message.reply('Você não pode banir uma pessoa de cargo mais alto ou igual ao seu!');
    if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
    if(razao.length < 1) return message.reply("Coloque um motivo!")
    let BEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setColor(membro.displayColor)
    .setTitle('**PUNIÇÃO**')
    .setDescription('Tipo:', '**BANIMENTO**')
    .addField('**Servidor**: ' + message.guild.name, '**Usuario**: ' + membro.displayName)
    .addField('**Horario**: ' + message.createdAt, '**Motivo**: ' + razao);
    membro.send(BEmbed)
    membro.ban()
    message.channel.send(BEmbed);
}

module.exports.help = {
    name: "ban"
}