const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let Online = message.guild.members.filter(a => a.presence.status == "online").size;
    let Ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let Ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let Offline = message.guild.members.filter(a => a.presence.status == "offline").size;

    let sinfoembed = new Discord.RichEmbed()
    .addField('Membros (' + message.guild.memberCount + ')', `\<:online:438399398808911882> **Online:** ${Online} | \<:idle:438399398796460032> **Ausente:** ${Ausente} | \<:dnd:438399396548313091> **Ocupado:** ${Ocupado} | \<:offline:438399398762905600> **Offline:** ${Offline} `);
    
    
    message.channel.send(sinfoembed); 
}

module.exports.help = {
    name: "on"
}