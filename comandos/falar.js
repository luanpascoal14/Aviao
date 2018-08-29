const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let saybotmessage = args.join(' ');
    if(!args[0]) return message.reply('Adicione alguma coisa para eu poder falar! ;)');
    message.delete().catch();
    message.channel.send(saybotmessage);
}

module.exports.help = {
    name: "falar"
}