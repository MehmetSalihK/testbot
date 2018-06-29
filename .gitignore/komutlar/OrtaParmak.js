const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Orta Parmak 🖕🖕🖕   \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://images-ext-2.discordapp.net/external/d-QM81zaQpGZAC1TJOM_BkvgvxdsQAeWxig3IyQ2_eI/https/img-s2.onedio.com/id-571d7e82d12fbe2b6494cd3b/rev-0/w-500/s-aeb4761f4d7ccc7cf294898a03c27167bb395f73.gif")
  .setFooter("2018 | Axion™", "https://i.hizliresim.com/QVGZ5A.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ortaparmak',
  description: 'Botun ortaparmak  Sistemi.',
  usage: 'ortaparmak'
};