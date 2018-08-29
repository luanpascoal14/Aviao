const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let limparArgs = parseInt(msgs[0],10);
    if(!limparArgs || limparArgs < 2 || limparArgs > 100) return message.channel.send(`Você precisa botar um número entre 2 e 100.`);
    else{
    let mensagens = await message.channel.fetchMessages({limit: limparArgs});
    message.channel.bulkDelete(mensagens);
    message.channel.send(`Chat limpo pelo ${message.author}.`);
    }
}

module.exports.help = {
    name: "limpar"
}