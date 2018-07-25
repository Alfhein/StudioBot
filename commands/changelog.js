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
        name: "Build #01",
        value: "All major changes in Build #01 below"
      },
    {
      name: "Verify",
      value: "Verify feature 100% completed"
    }
],
footer: {
  icon_url: bot.user.avatarURL,
  text: "Discord bot made by AvengeBots"
}
    }});

  }
module.exports.help = {
  name: "changelog"
}
