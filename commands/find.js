module.exports = {
  name: "find",
  description: "Find clients.",
  options: [],
  run: async (client, interaction) => {
    await execute(interaction);
  }
};

async function execute(interaction) {
  interaction.reply("pong")
}