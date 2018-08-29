const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let BIcon = message.client.user.displayAvatarURL;
            
    let BEmbed = new Discord.RichEmbed()
    .setThumbnail(BIcon)
    .setColor(message.member.displayColor)
    .setTitle('**INFORMAÇÕES DO BOT**')
    .setDescription('Bot: Aviãosito', 'Aviãosito')
    .addField('Criador:', 'luanpascoal14#9606')
    .addField('Servidor:', 'Casa do Aviãosito Bot => https://discord.gg/sJmTHc4')
    .addField('Servidor:', 'RaposaCraft => https://discord.gg/MvQqxhy')
    .addField('Usuarios: ' + message.client.users.size, 'Grupos: ' + message.client.guilds.size)
    .addField('SubDono: ', '! 🔥RaposinhoGm__r🔥#3372');

    message.author.send(BEmbed);
    message.reply('Enviei minhas informações em seu privado !');
}

module.exports.help = {
    name: "botinfo"
}