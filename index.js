const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
      return;
    }
    else if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  else if (msg.content === 'What is Formula X') {
      msg.reply('Formula X is a custom Formula Series that drives on custom and real tracks');
    }
});

client.login(process.env.TOKEN); //login bot using token



const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  mobilePlatform: true,
});

//status
bot.status({
  text: "Watch it",
  type: "STREAMING",
  url: "https://www.youtube.com/@FormulaXrbx",
});
//Events
bot.onMessage();

//Command Example (ping)
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");

//Chat bot main command
bot.command({
  name: "$alwaysExecute",
  category: "Command Support",
  code: `
  $reply[$messageID;yes]
  $httpRequest[https://api.udit.tk/api/chatbot?message=$message&name=Disco&gender=Male&user=$authorId;GET;;message]
  $botTyping
  $cooldown[2s;{newEmbed:{description:\:_\: Don't send messages to fast, you can break me by doing it}{color:RED}}]

  $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{description:\:_\: I don't disturb people!}{color:#ff0000}}]

  $onlyForChannels[$getServerVar[chatbotChannel];]

  $onlyIf[$getServerVar[chatbotChannel]!=;]
  $suppressErrors
  `,
});
bot.variables({
  money: 0,
  chatbotChannel: "",
});
