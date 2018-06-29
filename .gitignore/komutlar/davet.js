const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Davet Edip Bana Yardımcı Olmak İçin Bana Tıklayabilirsin :)")
  .setAuthor("İ B D", "")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("İ B D botu sunucunuza ekleyip İ B D BOT'una Yardım Etmiş Olursunuz Ve Eğlenceli Komutlara Sahip Olursunuz. ♥ ")
  .setFooter("♥️ 2018 ♥ İ B D ♥ BOT ♥️ 0.0.1 V ♥", "https://cdn.discordapp.com/attachments/416104849701339136/430973516117049344/image.png")
  .setThumbnail("")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=439759823429566465&permissions=8&scope=bot')
  
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
