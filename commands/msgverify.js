const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let logo = bot.user.displayAvatarURL;

    message.channel.send({embed: {
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      title: "Made by AvengeBots",
      url: "https://discord.gg/dkqsdWt",
      fields: [{
        name: "Verification",
        value: "Hello! Welcome to Azaritys server. Please verify your account"
      },
    {
      name: "How?",
      value: "Do !verify in this channel to verify your account!"
    },
  {
    name: "Why?",
    value: "We do this to make sure all of our users are active."
  }
],
footer: {
  icon_url: bot.user.avatarURL,
  text: "Discord bot made by AvengeBots"
}
    }});

  }
module.exports.help = {
  name: "msgverify"
}
