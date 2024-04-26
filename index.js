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
    else if (msg.content === '!Cmds') {
      msg.reply('!LeagueInfo, !FXInfo, !TimeZoneInfo, !CarInfo, !InviteLink');
    }
    else if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    else if (msg.content === '!LeagueInfo') {
      msg.reply('!FXInfo, !TimeZoneInfo, !CarInfo');
    }
    else if (msg.content === '!FXInfo') {
      msg.reply('Formula X is a custom formula series with its own custom car regulations.');
    }
    else if (msg.content === '!TimeZoneInfo') {
      msg.reply('TimeZone: CET');
    }
    else if (msg.content === '!CarInfo') {
      msg.reply('COMING SOON');
    }
    else if (msg.content === '!InviteLink') {
      msg.reply('https://discord.gg/Dh3JfXSG6V');
    }
  else if (msg.content === 'When was Formula X founded?') {
      msg.reply('Formula X was founded on the 14th of Febuary 2023');
    }
});

client.login(process.env.TOKEN); //login bot using token
