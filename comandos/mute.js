const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermissions('MANAGE_ROLES')) return message.channel.send('Você não tem permissão para executar este comando!')
    if (!args[0]) return message.channel.send("Mencione o membro!")
    var user = message.mentions.members.first();
    var razao = args.slice(1).join(' ') 
    if(user.highestRole < message.member.highestRole) return message.reply('Você não pode mutar uma pessoa de cargo mais alto ou igual ao seu!');
    if(user.highestRole === message.member.highestRole) return message.reply('Você não pode mutar uma pessoa de cargo mais alto ou igual ao seu!');
    if (!razao) razao = "sem motivo"
    var muteRole = message.guild.roles.find("name", "Silenciado")
    if(!muteRole) return message.channel.send("Não encontrei o cargo Silenciado.");
    try {
        user.addRole(muteRole)
        message.channel.send(args[0] +" foi mutado por **"  + razao + "**!");
    } catch (err) { 
        message.channel.send("Eu não tenho as permissões necessárias para mutar um membro!");
    } 
}

module.exports.help = {
    name: "mute"
}