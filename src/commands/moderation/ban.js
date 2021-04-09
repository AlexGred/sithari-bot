module.exports = {
  name: 'kick',
  description: 'Tag a member and ban them (but not really).',
  guildOnly: true,
  permissions: 'BAN_MEMBERS',
  execute(message) {
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member.ban({ reason: 'They were bad!', })
          .then(() => {
            message.reply(`${user.tag} was banned.`);
          })
          .catch(err => {
            message.reply('can\'t to to ban the member');
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