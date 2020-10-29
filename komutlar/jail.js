const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;

var jailrolü = "⼡ | JAIL"; 

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.cache.has("759441520880255036"))
    return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`);
  let jailkisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!jailkisi)
    return message.reply(
      `:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; **${prefix}jail <@kullanıcı> <1sn/1dk/1sa/1g>**`
    );


  let sebep = args.splice(2, args.length).join(" ");
  let jailrol = message.guild.roles.cache.find(role => role.name == jailrolü);
  if (!jailrol) {
    try {
      jailrol = await message.guild.roles.create({
        name: jailrolü,
        color: "#313136",
        permissions: [],
        reason: 'Mute için!'
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.createOverwrite(jailrol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let jailzaman = args[1]
    .replace(`sn`, `s`)
    .replace(`dk`, `m`)
    .replace(`sa`, `h`)
    .replace(`g`, `d`);

  if (!jailzaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``);

  await jailkisi.roles.add(jailrol.id);
  message.channel.send(
    new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setColor(0x00ae86)
    .setAuthor("İşlem : Jail")
    .setTimestamp()
    .addField("**Kullanıcı:**", `<@${jailkisi.id}>`)
    .addField("**Moderatör:**", message.author)
    .addField("**Süre:**", args[1])
    .addField("**Sebep:**", `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`)
    .setFooter("Jail Sitemi", bot.user.avatarURL())
  );

  setTimeout(function() {
    jailkisi.roles.remove(jailrol.id);
    message.channel.send(`<@${jailkisi.id}> kullanıcısının jail süresi sona erdi!`);
  }, ms(jailzaman));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "jail",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar jail atar.",
  usage: "jail <@kullanıcı> <1sn/1dk/1sa/1g>"
};
