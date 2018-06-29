const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Bedava Bot Profil Fotoğraf Tasarım! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('Botunuza Bedava Tasarım Yaptırmak Istiyorsanız Buyrun Link. = https://discord.gg/KFmCVKp')
  .setFooter("♥ 2018 ♥ TheRenk ♥ BOT ♥ Sponsor ♥")
  .setURL('https://discord.gg/KFmCVKp')
  message.delete();
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'tasarım',
  description: 'Afk Modundan Cikmani Saglar',
  usage: 'tasarım'
};