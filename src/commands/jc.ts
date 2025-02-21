import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("jc")
  .setDescription("Replies with jc NEGRO BABOSO!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong JC NEGRO!");
}

