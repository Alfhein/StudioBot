const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  message.channel.send("**COINDROP** React to this message with <:Coins:471156008828403728> to get 5k Coins!");

  function react(reaction, user){
    if(message.content.includes("**COINDROP** React to this message with <:Coins:471156008828403728> to get 5k Coins!") && reaction.emoji.name === "<:Coins:471156008828403728>") {
    console.log("reaction.users");
    }
}
}
module.exports.help = {
  name: "coindrop"
}
