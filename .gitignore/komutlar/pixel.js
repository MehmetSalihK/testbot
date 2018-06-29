const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('İ B D </>', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Pixel;').setDescription(message.author.tag + ', kullanım: ibd!pixel <@kullanıcı>.').setFooter('İ B D </>', client.user.avatarURL).setTimestamp());
        Jimp.read(user.avatarURL || user.defaultAvatarURL, function (err, image){
            if (err) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Pixel;').setDescription(err).setFooter('İ B D </>', client.user.avatarURL).setTimestamp());
            image.pixelate(5).write('lenna-pixelate.jpg');
            setTimeout(() => {
              message.channel.sendFile('lenna-pixelate.jpg');
            }, 500);
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pixel',
  description: 'Avatarınızı pixellendirir.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};