const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(':D')
    .setColor("RANDOM")
	.addField(message.author.username + " Artık Afksın!", "", true)
	.setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkol', 'afkyım'],
  permLevel: 0
};

exports.help = {
  name: 'afkyım',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'afkyım [Duyuruda Yazıcak Şey]'
};