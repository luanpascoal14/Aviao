const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Sem permissão')

    if(!args[0]) return message.reply('Mencione um usuario')
    let User = message.mentions.members.first();

    if(!args[1]) return message.reply('Coloque uma tag')

    
    if(message.content.includes('<@&')){
        let Tag = message.mentions.roles.first();
        User.removeRole(Tag)
        message.reply('Retirado com sucesso a tag!')
    }else {
        let Role = message.guild.roles.find('name', args.slice(1).join(' '));
        User.removeRole(Role);
        message.reply('Retirado com sucesso a tag!')
    }
}

module.exports.help = {
    name: "tirartag"
}
