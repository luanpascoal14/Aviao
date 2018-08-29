const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!args[0]) return message.reply("Por favor, faça a pergunta completa")
    let replies = ["Sim.", "Não.", "Eu não sei.", "talvez."]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(' ');

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor('#ffe200')
    .addField('Questão', question)
    .addField("Resposta", replies[result])

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}