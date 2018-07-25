const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./coins.json");
let tokens = require("./tokens.json");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
  console.log(`Studio Bot`);

  bot.user.setActivity("Azarity's videos", {type: "Watching"});
});

fs.readdir("./commands", (err, files) => {
  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.")
    return;
  }

  jsfile.forEach((f, i) => {
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(!tokens[message.author.username + message.author.id]){
    tokens[message.author.username + message.author.id] = {
      tokens: 0
    };
  }

  let tokenAmt = Math.floor(Math.random() * 75) + 1;
  let tokenBaseAmt = Math.floor(Math.random() * 10) + 1;
  console.log(`tokens: ${tokenAmt} ; ${tokenBaseAmt}`);

  if(tokenAmt === tokenBaseAmt){
    tokens[message.author.username + message.author.id] = {
      tokens: tokens[message.author.username + message.author.id].tokens + tokenAmt
    };
    fs.writeFile("./tokens.json", JSON.stringify(tokens), (err) => {
      if (err) console.log(err)
    });
    let tokenEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#282828")
    .addField("<:Tokens:471156050846941184>", `${tokenAmt} tokens added!`);

    message.channel.send(tokenEmbed).then(msg => {msg.delete(50000)});
  }

  if(!coins[message.author.username + message.author.id]){
   coins[message.author.username + message.author.id] = {
     coins: 0
   };
 }

 let coinAmt = Math.floor(Math.random() * 20) + 50;
 let baseAmt = Math.floor(Math.random() * 20) + 50;
 console.log(`coins: ${coinAmt} ; ${baseAmt}`);

 if(coinAmt === baseAmt){
   coins[message.author.username + message.author.id] = {
     coins: coins[message.author.username + message.author.id].coins + coinAmt
   };
 fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
   if (err) console.log(err)
 });
 let coinEmbed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#282828")
 .addField("<:Coins:471156008828403728>", `${coinAmt} coins added!`);

 message.channel.send(coinEmbed).then(msg => {msg.delete(50000)});
 }

});

bot.login(botconfig.token);
