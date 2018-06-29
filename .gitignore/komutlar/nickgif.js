const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
	client.on('message', function() {
	let nick = args.slice(0).join(' ');
        if (nick.length < 1) {
		return message.reply('bir sey **__Yazman__** Lazim ');
			} else {
	var interval = setInterval (function () {
	message.member.setNickname(`${message.author.username} M`);
	message.member.setNickname(`${message.author.username} MS`);
	message.member.setNickname(`${message.author.username} MSe`);
	message.member.setNickname(`${message.author.username} MSek`);
	message.member.setNickname(`${message.author.username} MSeko`);
      }, 2 * 2000);
      }
});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nickgif','animated'],
  permLevel: 4
};

exports.help = {
  name: 'nickgif',
  description: 'isim haraket Modunu ayarlar',
  usage: 'Server-daki isim haraket eder.'
}; 