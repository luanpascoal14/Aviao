const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === '364241967388950531') return message.reply('Você não pode me Desligar!');
    await message.channel.send(`Estou me desligando...`);
    console.log('Desligando . . .')
    console.log('[Aviãosito] Desligado!')
    process.exit();
}

module.exports.help = {
    name: "desligar"
}