const Discord = require("discord.js");

exports.run =  function (bot, message) {
    const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`Server ismi: ${guild.name}`);
      embed.addField(`Server kurucusu: ${guild.owner.user.username}#${guild.owner.user.discriminator}`);
      embed.addField(`${guild.owner.user.id} - ${guild.memberCount}`);
      embed.addField(`Server ID: ${guild.id}`);
      embed.setColor('#00ffff')
      embed.setTitle('Servers')
      embed.setDescription(`Şu an ${bot.guilds.size} server de bulunuyorum`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['servers'],
  permLevel: 4
};

exports.help = {
  name: 'server-bilgi',
  description: 'Bu Komut Gizlidir',
  usage: 'servers'
};
