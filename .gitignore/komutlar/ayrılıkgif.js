const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/382580600697126924/387668080232235028/tumblr_ovz8q3pH3G1skzu0ro1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668072204599296/tumblr_oymlpnyLXN1sowe88o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668067834003468/tumblr_oyls6allu21w3lurqo5_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668066605203457/tumblr_oox893huR11sowe88o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668060913270794/tumblr_olixu5T3Bu1sowe88o3_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668058837352448/tumblr_otvu0kcxwe1v791ndo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668050922700800/tumblr_ozvy8l2lef1vkv828o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387668012666454026/tumblr_opfpgea22P1v6hh94o1_500.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/387667971377725441/tumblr_oyq7wlM7PS1sowe88o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667971247702016/tumblr_oybjueP8Iw1v791ndo2_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667885503283200/tumblr_ol0o9xgwOJ1sowe88o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667859217842176/tumblr_oujla97lE91v791ndo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667853723172866/tumblr_ojrmaoRXWd1vhkfw9o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667771816804363/tumblr_oj9flqwikT1sowe88o2_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667691508465664/tumblr_oypdyhLciQ1v791ndo1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/387667625200582656/tumblr_oyjfjcf83P1wvo0fqo1_400.gif'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['agif', 'agif'],
 permLevel: 0 ,
};

exports.help = {
 name: 'ayrılıkgif',
 description: 'ÇILGINLIK YAP BİÇIS',
 usage: 'cilgin'
};
