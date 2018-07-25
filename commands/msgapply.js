const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let logo = bot.user.displayAvatarURL;

    message.delete(1);
    message.channel.send({embed: {
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      title: "Made by AvengeBots",
      url: "https://discord.gg/dkqsdWt",
      fields: [{
        name: "Apply for staff",
        value: "Click on one of the applications below to apply for staff!"
      },
    {
      name: "Helper",
      value: "[Click Here](https://goo.gl/forms/YD8E0xeGCPKFFHUy1)"
    },
  {
    name: "Developer",
    value: "We do not need developers at this time"
  },
  {
    name: "Thank you",
    value: "@everyone"
  }
],
footer: {
  icon_url: bot.user.avatarURL,
  text: "Discord bot made by AvengeBots"
}
    }});

  }
module.exports.help = {
  name: "msgstaff"
}
