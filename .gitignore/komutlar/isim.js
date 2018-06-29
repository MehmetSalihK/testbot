const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let yasim = args.slice(0).join(' ');
        if (yasim.length < 1) {
		return message.reply('**Yeni** İsmini **__Yazman__** Lazım ');
			} else {
        message.member.setNickname(`${yasim}`);
        const yasm = new Discord.RichEmbed()
        .setDescription(`İsminiz [${yasim}] Olarak Degistrildi.\n(Eğer Eski İsmini İstersen İsmini Sıfırlayabilirsin.)`)
        return message.channel.sendEmbed(yasm)
      }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yas','yearsold'],
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'YAS Modunu ayarlar',
  usage: 'isim'
}; 