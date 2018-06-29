const Discord = require('discord.js');

exports.run = function(client, message, args) {

// MSeko - 372856591990521858 Wigq8NUdSKF8STFLqoPy9ixlThZCG-np7ohijJexq81jcuepaAjqSNLrCRWqEyGTlkQw
// Faceit Administrator - 372862295295918137 cWBiI2pbYEvgiAyFX2vWP0W_UXM1oAHxBpbIUrefKdKVBQoymBDRsd6rlG-BA3K4auf8
// Duyuru - 372998310702743552 GahmMwROvpBb8bo5taYevsK6SQPcZynhJWJAM3ozBHmeTQMA2IacvzJKpskTJSSMCm-j

  // Create a new webhook
const hook = new Discord.WebhookClient('372998310702743552', 'GahmMwROvpBb8bo5taYevsK6SQPcZynhJWJAM3ozBHmeTQMA2IacvzJKpskTJSSMCm-j');
let [soru, a, b, c, d] = args.join(" ").split("|");
if(!soru) {
  [soru, a, b, c, d] = ["Botumuz nasil?", a, b, c, d];
}
let rnd = Math.floor((Math.random() * 39) + 1);

if(soru.length > 20 || a.length > 20 || b.length > 20 || c.length > 20 || d.length > 20) return msg.edit("Kullanim: .soru-sor soru|a|b|c|d").then(msg.delete.bind(msg), 2000);
// https://discordapp.com/oauth2/authorize?client_id=368724640094355467&scope=bot&permissions=401812495
const ssoru = `${soru}`;
const sa = `${a}`;
const sb = `${b}`;
const sc = `${(c)}`;
const sd = `${encodeURIComponent(d)}`;
hook.send(`Soru: ${ssoru}`);
hook.send(`A) ${sa}`);
hook.send(`B) ${sb}`);
hook.send(`C) ${sc}`);
hook.send(`D) ${sd}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['soru-sor'],
  permLevel: 0
};

exports.help = {
  name: 'sorusor',
  description: 'Millete soru sormaya işe yarar.',
  usage: 'ssorusor'
};
