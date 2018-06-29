const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Fun Commands Don`t Usage is Dm!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Jump!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(`https://cdn.discordapp.com/attachments/382583684554817549/383949014036381696/giphy_2.gif`)
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
  name: 'jump',
  description: 'Efsane Atayışı Gösterir',
  usage: 'tr!jump'
};
