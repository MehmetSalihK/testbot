const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Ahhh Keşke Şöyle Bi Yerde Olsam')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(`https://s-media-cache-ak0.pinimg.com/originals/8f/f5/fc/8ff5fc45ac68329c579a525b5658604b.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şelale',
  description: 'Şelaleye Bak Beee',
  usage: 'şelale'
};
