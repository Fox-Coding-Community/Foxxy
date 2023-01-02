import process from 'node:process';
import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';

@ApplyOptions<Command.Options>({
	description: 'Admin.',
})
export class PingCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.guildIdsToFetch.add(process.env.SERVER_DEV_ID);

		registry.registerChatInputCommand((builder) =>
			builder.setName(this.name).setDescription(this.description)
		);
	}

	public override async chatInputRun(
		interaction: Command.ChatInputInteraction
	) {
		await interaction.reply({
			content: "Yeah you're an admin!!!!",
		});
	}
}
