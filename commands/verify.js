const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let verifyChannel = message.guild.channels.find(`name`, "verify");

  message.member.addRole(`465727180316606464`);
  message.delete(1);

}

module.exports.help = {
  name: "verify"
}
