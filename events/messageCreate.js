const { InteractionType } = require("discord.js");
const fs = require("fs");

module.exports = async (client, message) => {
  if (message.content === 'ping') {
    message.reply('pong');
    message.channel.send('pong');
  } else if (message.content.startsWith('!kick')) {
    if (message.mentions.users.size) {
      const taggedUser = message.mentions.users.first();
      message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      message.reply('Please tag a valid user!');
    }
  }
};
