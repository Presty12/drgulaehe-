const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}say\`: **Üye Durum Grafiğini Gösterir**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**

**\`Yetkili\`**
» \`${prefix}ban <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Yasaklar**
» \`${prefix}kick <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Atar**
» \`${prefix}mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sohbet Kanalında Susturur**
» \`${prefix}ses-mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sesli Kanalda Susturur**
» \`${prefix}jail <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Jaile Atar**
» \`${prefix}unban <id>\`: **Belirtilen İD Deki Kişinin Sunucudan Yasağını Kaldırır**
» \`${prefix}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}vip al/ver\`: **Kullanıcıya Vip Al/Ver**
» \`${prefix}ban-say\`: **Sunucudakı Banlanan Üye Sayısını Gösterir**`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};