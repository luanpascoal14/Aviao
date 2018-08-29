const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = bot.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, :xShiina: **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, :xShiina: **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})

} catch (err) {
message.reply(':x: **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
}
}

module.exports.help = {
    name: "fake"
}