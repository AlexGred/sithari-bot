module.exports = {
  name: 'kick',
  description: 'Tag a member and kick them (but not really).',
  guildOnly: true,
  permissions: 'KICK_MEMBERS',
  execute(message) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`${user.tag} was kicked.`);
          })
          .catch(err => {
            message.reply('can\'t to kick the member.');
            console.error(err);
          });
      } else {
        message.reply('that user isn\'t in this guild!');
      }
    } else {
      message.reply('you need to tag a user in order to kick them!');
    }
  },
};