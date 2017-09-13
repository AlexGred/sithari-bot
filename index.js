const Discord = require('discord.js');
const bot = new Discord.Client();

const config =  require('./config.json');
const commands = require('./commands.json');

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('message', message => {

  if (message.content === config.prefix + commands.help.command) {
    let result= 'Список команд бота: \n \n';

    for (var key in commands) {
      result += config.prefix + commands[key].command + ' - ' + commands[key].description + '\n';
    }

    message.channel.send(result);
  }

  if (message.content === config.prefix + commands.power.command) {

    if (config.specialuser.includes(message.author.username)) {
      message.channel.send(
        {
          file: commands.power.value
        }
      );      
    }
    else {
      message.reply(commands.power.error);
    }
  }

  if (message.content === config.prefix + commands.rules.command) {
    message.channel.send(commands.rules.value);
  }

  if (message.content === config.prefix + commands.rankor.command) {
    message.channel.send(commands.rankor.value);
  }

  if (message.content === config.prefix + commands.tank.command) {
    message.channel.send(commands.tank.value);
  }
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', config.channels[0]);

  if (!channel) return;
  channel.send(`Привет ${member}! Я бот. Введи !help, чтобы узнать комманды.`);
});

bot.login(config.token);