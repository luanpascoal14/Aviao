const Discord = require('discord.js');
const config = require('../config.json');
const prefixes = require('../prefix.json');

module.exports.run = (bot, message, args) => {

    const prefix = prefixes[message.guild.id].prefixes;

    let AEmbed = new Discord.RichEmbed()
    .setTitle('**AJUDA**')
    .setThumbnail(message.client.user.displayAvatarURL)
    .setColor(message.member.displayColor)
    .setDescription('**BOT**: ', '**Aviãosito**')
    .addField('Para escolher uma categoria apenas clique no emoji correspondente!', 'Emojis:')
    .addField('\:card_box:   **Utlidades**', ':closed_lock_with_key: **Moderação**')
    .addField('\:cd: **Musica**', '\:back: **Voltar**');
    message.reply('Enviei minha lista, em seu privado :D!');
    message.author.send(AEmbed).then(msg=>{
        msg.react('🗃').then(r=>{
            msg.react('🔐').then(r=>{
                msg.react('💿').then(r=>{
                    msg.react('🔙')
                })
            })
            
        })
        const utilidadesfilter = (reaction, user) => reaction.emoji.name === '🗃' && user.id === message.author.id;
        const moderacaofilter = (reaction, user) => reaction.emoji.name === '🔐' && user.id === message.author.id;
        const musicafilter = (reaction, user) => reaction.emoji.name === '💿' && user.id === message.author.id;
        const voltarfilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        const utilidades = msg.createReactionCollector(utilidadesfilter, { time: 60000 });
        const moderacao = msg.createReactionCollector(moderacaofilter, { time: 60000 });
        const musica = msg.createReactionCollector(musicafilter, { time: 60000 });
        const voltar = msg.createReactionCollector(voltarfilter, { time: 60000 });
        utilidades.on('collect', r => { 
            let AEmbedUti = new Discord.RichEmbed()
            .setTitle('**AJUDA**')
            .setColor('#ff0000')
            .setThumbnail(message.client.user.displayAvatarURL)
            .setDescription('**Utilidades**', 'Comandos:')
            .addField(prefix + "8ball", 'Comando divertido para te responder')
            .addField(prefix + "avatar", 'Um comando para ver os avatares dos outros membros do servidor!')
            .addField(prefix + 'botinfo', 'Minhas Informações!')
            .addField(prefix + "corrida", 'Um comando para se divertir, vendo o que acontece em uma corrida')
            .addField(prefix + "falar", 'Quer se divertir? e talvez até enganar outras pessoas, pensando que o bot mesmo está falando? Então use')
            .addField(prefix + "apelido", 'Mude seu Apelido no servidor!')
            .addField(prefix + "pedido", 'Comando, para você dar ideias para mim :)')
            .addField(prefix + "ping", 'Veja o seu ping!')
            .addField(prefix + 'on', 'Veja quantos membros estao onlines, ausentes, ocupados e offlines')
            .addField(prefix + "clima", 'Veja o Clima!')
            .addField(prefix + "criarconvite", 'Crie um convite do servidor!')
            .addField(prefix + "emojis", 'Emojis do servidor!')
            .addField(prefix + "fake", 'Personagem fake!')
            .addField(prefix + "servers", 'Veja os servers que estou!')
            msg.edit(AEmbedUti);
        })
        moderacao.on('collect', r2 => { 
            let AEmbedMod = new Discord.RichEmbed()
            .setTitle('**AJUDA**')
            .setColor('#ff0000')
            .setThumbnail(message.client.user.displayAvatarURL)
            .setDescription('**Moderação**', 'Comandos:')
            .addField(prefix + "ban", 'Comando para punir membros de nunca mais entrar no servidor')
            .addField(prefix + 'unban', 'Desbana o membro que está banido utilizando seu ID')
            .addField(prefix + "kick", 'Expulse membros de seu servidor, mas eles poderão voltar novamente')
            .addField(prefix + "mute", 'Silencie pessoas que estão se comportando mal')
            .addField(prefix + "unmute", 'Dessilencie membros de seu servidor')
            .addField(prefix + "evotar", 'Utilize esse sistema de votação para notificar todos de seu servidor')
            .addField(prefix + "hvotar", 'Sistema de votação para notificar apenas membros onlines')
            .addField(prefix + 'reportar', 'Utilize para reportar membros a staff pelo seu comportamento')
            .addField(prefix + 'limpar', 'Comando para apagar mensagens com facilidade!')
            .addField(prefix + "setartag", 'Adiciona uma Tag a uma pessoa!')
            .addField(prefix + "tirartag", 'Retira uma tag de uma pessoa!')
            .addField(prefix + "chaton", 'Ativar chat!')
            .addField(prefix + "chatoff", 'Desativar chat!')
            .addField(prefix + "prefix", 'Mude o prefix em seu servidor!')
            msg.edit(AEmbedMod);
        })
        musica.on('collect', r3 => { 
            let AEmbedMus = new Discord.RichEmbed()
            .setTitle('**AJUDA**')
            .setColor('#ff0000')
            .setThumbnail(message.client.user.displayAvatarURL)
            .setDescription('**Musica**', 'Comandos:')
            .addField('**INDISPONIVEL**', '==============')
            .addField(prefix + 'lista', 'Mostrar a lista de comandos!')
            .addField(prefix + 'parar', 'Faça o bot parar de tocar as musicas e limpar a lista!')
            .addField(prefix + 'pular', 'Passe para o proxima musica da lista!')
            .addField(prefix + 'tocar', 'Toque a musica desejada, utilizando apenas o link!')
            .addField(prefix + 'tocando', 'Mostre a musica atual, que está tocando!')
            .addField(prefix + 'volume', 'Altere o Volume da musica!');
            msg.edit(AEmbedMus);
        })
        voltar.on('collect', r4 => {
            msg.edit(AEmbed);
        })
    })
}

module.exports.help = {
    name: "ajuda"
}