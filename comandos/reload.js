const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '364241967388950531') return message.channel.send(`Você não tem permissão `)
    let file = args.slice(0).join(' ');
    if (file.length < 1) return message.reply(`Coloque o nome do comando.`);
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Comando ${args[0]} não encontrado`);
    }
    message.channel.send(`Comando ${args[0]} reiniciado.`);
}

module.exports.help = {
    name: "reload"
}