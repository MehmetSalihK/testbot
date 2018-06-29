const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/382580600697126924/384321732460150785/nykleer_bomba.gif', 'https://cdn.discordapp.com/attachments/382580600697126924/384321667897229312/atom_bomba.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321657923305472/nykleer_bomba_deniz.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321653192130561/atom_bombas_nykleer.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321608950743075/atom_bomba_siyah_beyaz.gif','https://cdn.discordapp.com/attachments/382580600697126924/384321608615198720/atom_bombas.gif'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['abom','ab'],
 permLevel: 0 ,
};

exports.help = {
 name: 'atombombası',
 description: 'ÇILGINLIK YAP BİÇIS',
 usage: 'atombombası'
};
