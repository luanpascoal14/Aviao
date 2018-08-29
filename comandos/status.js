const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.author.id === '364241967388950531') return message.reply('Sem permissão!')

    if(!args[0]) return message.reply('Digite um Status!')

    if(args[0] === 'online', 'ausente', 'ocupado', 'offline'){
        if(args[0] === 'online'){
            bot.user.setStatus('online');
            message.reply('Status Mudado para **Online**')
        }
        if(args[0] === 'ausente'){
            bot.user.setStatus('idle');
            message.reply('Status Mudado para **Ausente**')
        }
        if(args[0] === 'ocupado'){
            bot.user.setStatus('dnd')
            message.reply('Status Mudado para **Ocupado**')
        }
        if(args[0] === 'offline'){
            bot.user.setStatus('invisible')
            message.reply('Status Mudado para **Offline**')
        }
    }
}

module.exports.help = {
    name: "status"
}