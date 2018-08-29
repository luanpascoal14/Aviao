var Discord = require('discord.js')

module.exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars

    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply(':x: **Eu não tenho permissão para criar um convite deste servidor.**')
   }
}

module.exports.help = {
    name: "criarconvite"
}