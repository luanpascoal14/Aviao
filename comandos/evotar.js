const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Você precisa ter a permissão de gerenciar servidor para isso!');
    if(!args[0]) return message.reply('Adicione o Conteudo!');
    let VConteudo = args.join(' ');
    let AnuncioEmbed0 = new Discord.RichEmbed()
    .setDescription(`**Votação**`)
    .setAuthor(`${message.author.username}`)
    .setColor('#fffa00')
    .addField(`**${VConteudo}**`, '==========')
    .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
    message.channel.send('@everyone Nova Votação!');
    message.channel.send(AnuncioEmbed0).then(m => {
        m.react('✅').then(r=>{
            m.react('❎');
        })
    });
}

module.exports.help = {
    name: "evotar"
}