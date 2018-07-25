const Discord = require("discord.js");
let tokens = require("../tokens.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!tokens[message.author.username + message.author.id]){
    tokens[message.author.username + message.author.id] = {
      tokens: 0
    };
  }

  let uTokens = tokens[message.author.username + message.author.id].tokens;


  let tokenEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#282828")
  .addField("<:Tokens:471156050846941184> Tokens", `You have ${uTokens} Tokens!`);

  message.channel.send(tokenEmbed).then(msg => {msg.delete(50000)});

}

module.exports.help = {
  name: "tokens"
}
