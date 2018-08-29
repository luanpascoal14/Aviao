const Discord = require('discord.js')
const tempo = require('weather-js');

module.exports.run = (bot, message, args) => {
    if(!args[0]) return message.reply('Digite uma Cidade!');
    tempo.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
        if (err) return message.channel.send(err);

        if (result.length === 0) {
            message.channel.send('Selecione uma cidade para pesquisar o tempo!' )
            return;
        }
            var Tempo = result[0].current; 
            var Local = result[0].location;

        let embed = new Discord.RichEmbed()
            .setColor(`#38c6ff`)
            .setAuthor(`Tempo de ${Tempo.observationpoint}`)
            .setThumbnail(Tempo.imageUrl)
            .addField('Fuso horário :', `${Local.timezone} UTC`, true)
            .addField('Tipo de grau :', Local.degreetype, true)
            .addField('Temperatura :', `${Tempo.temperature} graus`, true)
            .addField('Em torno dos:', `${Tempo.feelslike} graus`, true)
            .addField('Ventos:', Tempo.winddisplay, true)
            .addField('Umidade do Ar:', `${Tempo.humidity}%`, true);
        message.channel.send(embed);
    });
}

module.exports.help = {
    name: "clima"
}