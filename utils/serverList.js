// get server list to joined bot
async function getServerList(interaction) {
  try {
    // Fetch all guilds that the bot is a member of
    const partialGuilds = await interaction.client.guilds.fetch();
    const guilds = await Promise.all(
      partialGuilds.map((partialGuild) => partialGuild.fetch()),
    );

    // Filter guilds to find those where the user is a member
    const userGuilds = guilds.filter((guild) =>
      guild.members.cache.has(interaction.user.id),
    );
    const guildIDs = userGuilds.map((guild) => guild.id);

    // Reply to the interaction with a list of guild IDs
    await interaction.reply(`You are a member of the following guilds:\n${guildIDs.join('\n')}`);
  } catch (error) {
    console.error('Error executing command:', error);
    await interaction.reply({ content: 'An error occurred while processing your command.', ephemeral: true });
  }
}