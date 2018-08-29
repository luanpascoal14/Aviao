const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args, prefix) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Sem Permissão!');
    if(!args[0] || args[0 == "help"]) return message.reply(`Uso: <prefix atual>prefix <novo prefix>`);

    let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('**NOVO PREFIX**')
    .setDescription('Novo Prefix: ' + args[0])
    .setFooter(`Por: ${message.author.displayAvatarURL} ${message.author.username}`);

    message.channel.send(sEmbed)
        
}

module.exports.help = {
    name: "prefix"
}