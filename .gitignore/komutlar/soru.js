const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <question fjdksf>
  if(!args[2]) return message.reply("Lütfen tam bir soru sorun");
  let replies = ["Evet.", "Hayır.", "Bilmiyorum", "Sonra tekrar sor"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Soru", question)
  .addField("Cevap", replies[result]);

  message.channel.send(ballembed);



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Soru sormaya yarar.',
  usage: 'sor <soru>'
};
