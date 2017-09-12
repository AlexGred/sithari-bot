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

  /*    if () {
      message.channel.send(
        {
          file: commands.power.value
        }
      );      
    }*/
  }

  if (message.content === config.prefix + commands.user.command) {

    //message.channel.send(message.member.roles.keyArray());

    let roleId = message.guild.roles.find('name', 'admin');
    
    //console.log(message.guild.roles);
    console.log(roleId.id);

    if (message.member.roles.has(roleId.id)) {
      message.channel.send('true');
    }
  }

});

bot.login(config.token);