const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.username + message.author.id]){
    return message.reply("You don't have any coins!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[message.author.username + pUser.id]){
    coins[message.author.username + pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[message.author.username + pUser.id].coins;
  let sCoins = coins[message.author.username + message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Not enough coins there!");

  coins[message.author.username + message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[message.author.username + pUser.id] = {
    coins: pCoins + parseInt(`5000`)
  };

  message.channel.send(`💸 ${message.author} paid ${pUser} **${args[1]} Coins**!`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
