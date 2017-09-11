const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'MzU2ODgwMjAzMDg1MjUwNTcx.DJhyZQ.G-3Z6ESTcC0FVzGmpvxb7cTUf0k';

client.on('ready', () => {
  console.log('I am ready!');
});

var prefix = '!';

client.on('message', message => {

  if (message.content === prefix + 'ping') {
    message.channel.send('pong');
  }
});

client.login(token);