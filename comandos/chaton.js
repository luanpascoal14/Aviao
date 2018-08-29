const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(`Não consegue não é mesmo?`)
        
        }
    var da = message.guild.roles.find("name","@everyone")
    if(!message.guild.roles.find('name', 'Equipe')) return message.reply('Precisa ter um cargo chamado Equipe!')
    var da1 = message.guild.roles.find('name', "Equipe")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: true
        
        
      })
    
      message.channel.overwritePermissions(da1, {
        SEND_MESSAGES: true
    
      })
      message.channel.send(`O canal ${message.channel} foi **ativado** pelo ` + message.author)

}

module.exports.help = {
    name: "chaton"
}