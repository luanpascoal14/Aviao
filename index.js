const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

const prefix = config.prefix;


bot.on('guildMemberAdd', member => {
    if(member.guild.id === '437625052775710753') {
        member.send('Obrigado por entrar no **' + member.guild.name + '** ' + member.user.username + '! Chame seus amigos para sé divertir com você! https://discord.gg/26MPNnh');
    }
});



bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.reply('Eu sou apenas um Bot, então use comandos em servidores');

    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = msgs.shift().toLowerCase();

    if(message.content.startsWith(prefix + 'serverinfo')) {

        let SIicon = message.guild.iconURL;
        let SIname = message.guild.name;
        let SIid = message.guild.id;
        let SIregion = message.guild.region;
        let SIdono = message.guild.owner.nickname
        let SIcreate = message.guild.createdAt
        let SImembros = message.guild.memberCount;

        //let Online = message.guild.members.filter(a => a.presence.status == "online").size;
        //let Ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        //let Ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        //let Offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    

        let SIEmbed = new Discord.RichEmbed()
        .setColor('#6ba3ff')
        .setThumbnail(SIicon)
        .setTitle(SIname)
        .setDescription('Server ID: ' + SIid, 'Região: ' + SIregion)
        .addField('Dono: ' + SIdono, 'Criado em: ' + SIcreate);
        //.addField(`Membros(${SImembros})`, `**Online:** ${Online} | **Ausente:** ${Ocupado} | **Ocupado:** ${Ausente} | **Offline:** ${Offline} `)
        message.delete();
        message.reply(SIEmbed)

    }

    if(message.content.startsWith(prefix + 'ping')) {
        if(comando === 'ping'){
            var pingembed = new Discord.RichEmbed()
            .setDescription(`:ping_pong: **PONG!**`)
            .setColor('0x64fc00')
            .addField(`Seu ping é de aproximadamente **${Math.round(bot.ping)}ms**!`, ' ⠀')
            .setAuthor(message.author.username, message.author.displayAvatarURL);
            message.delete();
            message.channel.send(pingembed)
        }
    }

    if(message.content.startsWith(prefix + 'avatar')) {
        if(comando === 'avatar'){
            var AvatarUser = message.mentions.users.first() || message.author;
            var AvatarEmbed = new Discord.RichEmbed()
            .setTitle("Avatar de " + AvatarUser.username)
            .setImage(AvatarUser.displayAvatarURL)
            .setColor(0xFF0000)
            message.channel.send(AvatarEmbed);
            
        }
    }
    if(message.content.startsWith(prefix + 'reportar')) {
        if(comando === 'reportar'){
            if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
            if (!msgs.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! use a!reportar (usuario) (motivo)')
            var canal = message.guild.channels.find("name", "reports");
            if (!canal) return;
            let RrIcon = message.mentions.users.first().displayAvatarURL;
            let ReportarEmbed = new Discord.RichEmbed()
            .setThumbnail(RrIcon)
            .setDescription("**Denuncia**", ' ⠀')
            .setColor(message.member.displayColor)
            .addField("Nome: ", message.mentions.users.first().username)
            .addField("Motivo: ", msgs.slice(1).join(' '))
            .addField("Horario: ", message.createdAt)
            .addField("Por: ", message.author.username);
            
            message.delete();
            canal.send(ReportarEmbed);
            message.author.send('Sua denuncia foi enviada com sucesso!');
        }
    }
    
    if(message.content.startsWith(prefix + 'report')) {
        if(comando === 'report'){
            if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
            if (!msgs.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! use a!report (usuario) (motivo)')
            var canal = message.guild.channels.find("name", "reports");
            if (!canal) return;
            let RtIcon = message.mentions.users.first().displayAvatarURL;
            let ReportarEmbed = new Discord.RichEmbed()
            .setThumbnail(RtIcon)
            .setDescription("**Denuncia**", " ⠀")
            .setColor(message.member.displayColor)
            .addField("Nome: ", message.mentions.users.first().username)
            .addField("Motivo: ", msgs.slice(1).join(' '))
            .addField("Horario: ", message.createdAt)
            .addField("Por: ", message.author.username);
            
            message.delete();
            canal.send(ReportarEmbed);
            message.author.send('Sua denuncia foi enviada com sucesso!');
        }
    }
    if(message.content.startsWith(prefix + 'on')){
        let Online = message.guild.members.filter(a => a.presence.status == "online").size;
        let Ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let Ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let Offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    
        let sinfoembed = new Discord.RichEmbed()
        .addField('Membros', `**Online:** ${Online} | **Ausente:** ${Ausente} | **Ocupado:** ${Ocupado} | **Offline:** ${Offline} `) ;
        
        message.channel.send(sinfoembed);
        
    }

    if(message.content.startsWith(prefix + 'status')){
        if(!message.author.id === '364241967388950531') return message.reply('Sem permissão!')

        if(!msgs[0]) return message.reply('Mencione um Status!')

        if(msgs[0] === 'online', 'ausente', 'ocupado', 'offline'){
            if(msgs[0] === 'online'){
                bot.user.setStatus('online');
                message.reply('Status Mudado para **Online**')
            }
            if(msgs[0] === 'ausente'){
                bot.user.setStatus('idle');
                message.reply('Status Mudado para **Ausente**')
            }
            if(msgs[0] === 'ocupado'){
                bot.user.setStatus('dnd')
                message.reply('Status Mudado para **Ocupado**')
            }
            if(msgs[0] === 'offline'){
                bot.user.setStatus('invisible')
                message.reply('Status Mudado para **Offline**')
            }
        }
    }


    if(message.content.startsWith(prefix + '8ball')){
        if(!msgs[0]) return message.reply("Por favor, faça a pergunta completa")
        let replies = ["Sim.", "Não.", "Eu não sei.", "talvez."]

        let result = Math.floor((Math.random() * replies.length));
        let question = msgs.join(' ');

        let ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor('#ffe200')
        .addField('Questão', question)
        .addField("Resposta", replies[result])

        message.channel.send(ballembed);
    }


    if(message.content.startsWith (prefix + 'ajuda')){
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
                .addField(prefix + "notificar", 'Apenas utilizavel em meu servidor, isso é para quando sair uma nova novidade você ficar por dentro de tudo!')
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
                .addField(prefix + "votar", 'Você quer perguntar as membros se Sim ou Não')
                .addField(prefix + 'reportar', 'Utilize para reportar membros a staff pelo seu comportamento')
                .addField(prefix + 'limpar', 'Comando para apagar mensagens com facilidade!')
                .addField(prefix + "setartag", 'Adiciona uma Tag a uma pessoa!')
                .addField(prefix + "tirar", 'Retira uma tag de uma pessoa!')
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



    if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }

    if (message.content.includes("https://discord.app/invite")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }

    if(message.content.startsWith(prefix + 'setartag')){
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Sem permissão')

        if(!msgs[0]) return message.reply('Mencione um usuario')
        let User = message.mentions.members.first();

        if(!msgs[1]) return message.reply('Coloque uma tag')

        
        if(message.content.includes('<@&')){
            let Tag = message.mentions.roles.first();
            User.addRole(Tag)
            message.reply('Adicionado com sucesso a tag!')
        }else {
            let Role = message.guild.roles.find('name', msgs.slice(1).join(' '));
            User.addRole(Role);
            message.reply('Adicionado com sucesso a tag!')
        }
    }
    if(message.content.startsWith(prefix + 'tirartag')){
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Sem permissão')

        if(!msgs[0]) return message.reply('Mencione um usuario')
        let User = message.mentions.members.first();

        if(!msgs[1]) return message.reply('Coloque uma tag')

        
        if(message.content.includes('<@&')){
            let Tag = message.mentions.roles.first();
            User.removeRole(Tag)
            message.reply('Retirado com sucesso a tag!')
        }else {
            let Role = message.guild.roles.find('name', msgs.slice(1).join(' '));
            User.removeRole(Role);
            message.reply('Retirado com sucesso a tag!')
        }
    }

    if(message.content.startsWith(prefix + 'hvotar')) {
        if(comando === 'hvotar'){
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Você precisa ter a permissão de gerenciar servidor para isso!');
            if(!msgs[0]) return message.reply('Adicione o Conteudo!');
            let VConteudo = msgs.join(' ');
            let AnuncioEmbed0 = new Discord.RichEmbed()
            .setDescription(`**Votação**`)
            .setAuthor(`${message.author.username}`)
            .setColor('#fffa00')
            .addField(`**${VConteudo}**`, '==========')
            .addField(`\:white_check_mark: Sim`, '\:negative_squared_cross_mark: Não');
            message.channel.send('@here Nova Votação!');
            message.channel.send(AnuncioEmbed0).then(m => {
                m.react('✅').then(r=>{
                    m.react('❎');
                })
            });
        }
    }

    if(message.content.startsWith(prefix + 'evotar')) {
        if(comando === 'evotar'){
            if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Você precisa ter a permissão de gerenciar servidor para isso!');
            if(!msgs[0]) return message.reply('Adicione o Conteudo!');
            let VConteudo = msgs.join(' ');
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
    }

    if(message.content.startsWith(prefix + 'ban')){
        var razao = msgs.slice(1).join(" ")
        var membro = message.mentions.members.first();
        if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
        if(!membro) return message.reply("você não mencinou ninguém")
        if(membro.highestRole > message.member.highestRole) return message.reply('Você não pode banir uma pessoa de cargo mais alto ou igual ao seu!');
        if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
        if(razao.length < 1) return message.reply("Coloque um motivo!")
        let BEmbed = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .setColor(membro.displayColor)
        .setTitle('**PUNIÇÃO**')
        .setDescription('Tipo:', '**BANIMENTO**')
        .addField('**Servidor**: ' + message.guild.name, '**Usuario**: ' + membro.displayName)
        .addField('**Horario**: ' + message.createdAt, '**Motivo**: ' + razao);
        membro.send(BEmbed)
        membro.ban()
        message.channel.send(BEmbed);
    }

    if(message.content.startsWith(prefix + 'unban')){
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não tem permissão de desbanir usuarios!');
        let member = bot.users.get(msgs[0])
        if (!member) return message.channel.send(`${message.author}, Mencione o ID do usuario`);
        message.guild.unban(member)
        let UBEmbed = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .setColor(message.member.displayColor)
        .setTitle('**DESBANIMENTO**')
        .addField('**Servidor**: ' + message.guild.name, '**Usuario**: <@' + member + '>')
        .addField('**Horario**: ' + message.createdAt, '**Por**: ' + message.author.username);
        message.delete();
        message.channel.send(UBEmbed);
        
    }

    if(message.content.startsWith(prefix + 'kick')){
        var razao = msgs.slice(1).join(" ")
        var membro = message.mentions.members.first();
        if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
        if(!membro) return message.reply("você não mencionou ninguém")
        if(membro.highestRole >= message.member.highestRole) return message.reply('Você não pode banir uma pessoa de cargo mais alto ou igual ao seu!');
        if(!membro.kickable) return message.reply("Você não pode kickar essa membro")
        if(razao.length < 1) return message.reply("Coloque um motivo!")
        let KEmbed = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .setColor(membro.displayColor)
        .setTitle('**PUNIÇÃO**')
        .setDescription('Tipo:', '**EXPULSAMENTO**')
        .addField('**Servidor**: ' + message.guild.name, '**Usuario**: ' + membro.displayName)
        .addField('**Horario**: ' + message.createdAt, '**Motivo**: ' + razao);
        membro.send(KEmbed)
        membro.kick()
        message.channel.send(KEmbed);
                
    }

    if(message.content.startsWith(prefix + 'mute')){
        if (!message.member.hasPermissions('MANAGE_ROLES')) return message.channel.send('Você não tem permissão para executar este comando!')
        if (!msgs[0]) return message.channel.send("Mencione o membro!")
        var user = message.mentions.members.first()
        var razao = msgs.slice(1).join(' ') 
        if(user.highestRole >= message.member.highestRole) return message.reply('Você não pode banir uma pessoa de cargo mais alto ou igual ao seu!');
        if (!razao) razao = "sem motivo"
        var muteRole = message.guild.roles.find("name", "Silenciado")
        if(!muteRole) return message.channel.send("Não encontrei o cargo Silenciado.");
        try {
            user.addRole(muteRole)
            message.channel.send(msgs[0] +" foi mutado por **"  + razao + "**!");
        } catch (err) { 
            message.channel.send("Eu não tenho as permissões necessárias para mutar um membro!");
        } 
    }

    if(message.content.startsWith(prefix + 'unmute')){
        let muteRole = message.guild.roles.find("name", "Silenciado");
        let member = message.mentions.members.first();
        if(!member) return message.channel.send(`Quem você quer desmutar?`);
        else{
            member.removeRole(muteRole);
            message.channel.send(`${member} foi desmutado por ${message.author}`);
        }
    }

    if(message.content.startsWith(prefix + 'notificar')){
        if(!message.guild.id === '471172114016370688') return message.reply('Esse comando só funciona em meu servidor! Para acessa-lo use av!botinfo');
        let NotRole = message.guild.roles.find('id', '471330802152505354');
        if(message.member.roles.has('id', '47133080215250535')){
            message.member.removeRole(NotRole);
        } else {
            message.member.addRole(NotRole);
        }
    }


    if(message.content.startsWith(prefix + 'botinfo')){
        if(comando === 'botinfo'){
            let BIcon = message.client.user.displayAvatarURL;
            
            let BEmbed = new Discord.RichEmbed()
            .setThumbnail(BIcon)
            .setColor(message.member.displayColor)
            .setTitle('**INFORMAÇÕES DO BOT**')
            .setDescription('Bot:', message.client.user.username)
            .addField('Criador:', 'luanpascoal14#9606')
            .addField('Servidor:', 'Casa do Aviãosito Bot => https://discord.gg/sJmTHc4')
            .addField('Servidor Segundario:', 'RaposaCraft => https://discord.gg/MvQqxhy')
            .addField('Usuarios: ' + message.client.users.size, 'Grupos: ' + message.client.guilds.size)
            .addField('SubDono: ', '! 🔥RaposinhoGm__r🔥#3372');

            message.author.send(BEmbed);
            message.reply('Enviei minhas informações em seu privado !');
            
        }
    }

    if(message.content.startsWith(prefix + 'falar')) {
        if(comando === 'falar'){
            let saybotmessage = msgs.join(' ');
            if(!msgs[0]) return message.reply('Adicione alguma coisa para eu poder falar! ;)');
            message.delete().catch();
            message.channel.send(saybotmessage);
        }
    }

    if(message.content.startsWith(prefix + `limpar`)) {
        let limparArgs = parseInt(msgs[0],10);
        if(!limparArgs || limparArgs < 2 || limparArgs > 100) return message.channel.send(`Você precisa botar um número entre 2 e 100.`);
        else{
        let mensagens = await message.channel.fetchMessages({limit: limparArgs});
        message.channel.bulkDelete(mensagens);
        message.channel.send(`Chat limpo pelo ${message.author}.`);
        }
    }


    if(message.content.startsWith(prefix + 'corrida')) {
        let user = message.mentions.users.first();
          if (!user) return message.reply('**Você não mencionou o seu Competidor!**').catch(console.error);
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros 🏎 ....."," fez **500** metros 🏎 ..........."," fez **800** metros 🏎 .............."," fez **1000** metros 🏎 ................."," fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
          message.channel.send({
              "embed": {
                  "title": "🏎 Corrida",
                  "description": " O " + Corrida + " e" +  corrida2 + " **começaram uma corrida**" ,
                  "color": "65535",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
    }
    
});

const ytdl = require('ytdl-core');
const queue = new Map();

bot.on('message', async message => {
    if(message.author.bot) return;
    const prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.split(' ');
    const serverQueue = queue.get(message.guild.id);

    if(message.content.startsWith(prefix + 'tocar')){
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) return message.reply('Você precisa estar em um canal de voz!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) {
            return message.reply('Eu não pude conectar em seu canal, pois preciso ter algumas permissões!');
        }
        if(!permissions.has('SPEAK')) {
            return message.reply('Eu não posso falar, pois preciso ter algumas permissões!');
        }

        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };

        if(!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error('Tive um erro! ' + error);
                queue.delete(message.guild.id);
                return message.reply('Eu não pude conectar ao canal, pois tive alguns erros!');
            }

        } else {
            serverQueue.songs.push(song);
            return message.reply(`Adicionado para a lista: **${song.title}**`);
        }
        return;
    } else if (message.content.startsWith(prefix + 'pular')) {
        if(!message.member.voiceChannel) return message.reply('Você não está em um canal de voz!');
        if (!serverQueue) return message.reply('Não está tocando nada!');
        serverQueue.connection.dispatcher.end();
        return;



    } else if (message.content.startsWith(prefix + 'parar')){
        if(!message.member.voiceChannel) return message.reply('Você não está em um canal de voz!');
        if (!serverQueue) return message.reply('Não está tocando nada!');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
        return;



    } else if(message.content.startsWith(prefix + 'volume')) {
        if(!serverQueue) return message.reply('Não estou tocando nada!');
        if(!args[1]) return message.reply(`O volume atual é: **${serverQueue.volume}**`);
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return message.reply(`O volume atual agora é: **${args[1]}**`);



    } else if (message.content.startsWith(prefix + 'tocando')) {
        if(!serverQueue) return message.reply('Não estou tocando nada!');
        return message.reply(`Estou Tocando: **${serverQueue.songs[0].title}**`);
    
    
    } else if (message.content.startsWith(prefix + 'lista')) {
        if (!serverQueue) return message.reply('Eu não estou tocando nada!');
        return message.reply(`
==**Lista**==
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Tocando**: ${serverQueue.songs[0].title}
        `);
    }
    return;

});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Musica acabou!');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error))
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`Agora Tocando: **${song.title}**`);

}


bot.on('ready', () => {
    console.log('[Aviãosito] Iniciado !');
    console.log(`Logado em ${bot.guilds.size} servidores e ${bot.users.size} usuarios`)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} servers | ${bot.users.size} usuarios`, {type:'WATCHING'});
});

bot.on('GuildCreate', () => {
    console.log(`Entrou em um servidor`)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} servers | ${bot.users.size} usuarios`, {type:'WATCHING'});
});

bot.on('GuildDelete', () => {
    console.log(`Saiu de um servidor`)
    bot.user.setActivity(`-ajuda | ${bot.guilds.size} servers | ${bot.users.size} usuarios`, {type:'WATCHING'});
});



bot.login(process.env.BOT_TOKEN);
