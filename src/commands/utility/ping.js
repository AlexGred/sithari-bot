module.exports = {
  name: 'ping',
  args: false,
  description: 'Pong!',
  execute(message) {
    message.channel.send('Pong!');
  },
};