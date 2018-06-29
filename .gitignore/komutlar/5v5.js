const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('TheRenk', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 5) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription(message.author.tag + ', kullanım: ibd!5v5 <@kullanıcı> <@kullanıcı> <@kullanıcı> <@kullanıcı> <@kullanıcı>.').setFooter('İBD', client.user.avatarURL).setTimestamp());
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaş başladı!').setFooter('İBD', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %25.').setFooter('İBD', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %50.').setFooter('İBD', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %75.').setFooter('İBD', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaşılıyor %100.').setFooter('İBD', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Savaş bitti!').setFooter('İBD', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('5v5;').setDescription('Kazanan: ' + user.tag).setFooter('İBD', client.user.avatarURL).setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: '5v5',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
