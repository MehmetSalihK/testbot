const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Ana Komutlar")
  .setAuthor("İBD", "https://cdn.discordapp.com/attachments/419155895398825984/419876730006929428/cce1e65f9511629a3366a8e163f71365--letter-logo-logo-design.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription('i!invite • Send BOT invite Link.\ntr!botinfo• Deleted!.\ntr!partner • Botun partner olduğu sunucuları atar.[Partnerler Eklenicek!]\ntr!ping • Botun pingini gösterir.\ntr!sunucubilgi • Bu komutu hangi sunucuda kullanıysanız oranın bilgisini verir.[Bakımda!]\ntr!tavsiye • Botun sahibine verdiğiniz tavsiyeyi gönderir.\n')
  .setFooter("♥️ 2018 ♥ İBD ♥ BOT ♥️ 1.0.0 V ♥", "https://cdn.discordapp.com/attachments/419155895398825984/419876730006929428/cce1e65f9511629a3366a8e163f71365--letter-logo-logo-design.jpg")
  .setThumbnail("https://cdn.discordapp.com/attachments/419155895398825984/419876730006929428/cce1e65f9511629a3366a8e163f71365--letter-logo-logo-design.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  
  .addField("Moderatör Komutları",
     "i!ban • Belirttiğiniz kişiyi sunucudan banlar.\ntri!kick • Belirttiğiniz kişiyi sunucudan atar.\ntr!sustur • Belirttiğin kişiyi susturur.\ntr!temizle • Sohbeti belirttiğin sayı kadar siler.\ntr!unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\n")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Eğlence Komutları", "i!alkış • Etiketlediğiniz kişiyi alkışlar.\ntr!söv • Etiketlediğiniz kişiye söver.\ntr!yaz • Bota istediğiniz şeyi yazdırır.\n", true)
  .addBlankField(true)
  .addField("Kullanıcı Komutları", "i!afk • Komut ve afk sebebini yazarsanız afk moda geçersiniz.\ntr!geldim • Afk Modundan Çıkmanızı Sağlar.\ntr!kullanıcıbilgim • Bu komutu kullanan her kimse hakkında bilgi verir.\n", true);


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'yardım'
};
