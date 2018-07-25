const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.username + message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#282828")
  .addField("<:Coins:471156008828403728> Coins", `You have ${uCoins} Coins`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(50000)});

}

module.exports.help = {
  name: "coins"
}
