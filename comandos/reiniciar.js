const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === '364241967388950531') return message.reply('Você não pode me Reiniciar!');
    resetBot(message.channel)
        async function resetBot(channel) {
            channel.send(`Reiniciando...`)
            .then(msg =>bot.destroy(true))
            .then(() => bot.login(config.token));
         }

    bot.on('ready', () => {
        message.channel.send(`Bot reiniciado com sucesso!`);
        console.log('Reiniciado com sucesso!')
    });
}

module.exports.help = {
    name: "reiniciar"
}