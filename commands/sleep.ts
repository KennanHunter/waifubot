import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
	User,
} from "slash-create";

export default class SleepCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "sleep",
			description: "Put someone to sleep",
			options: [
				{
					type: CommandOptionType.USER,
					name: "target",
					description: "Who do you want to put to sleep?",
				},
			],
		});
	}

	async run(ctx: CommandContext) {
		const target: User = ctx.options.target;

		if (!target) {
			return "Specify a user to put to sleep";
		}

		return `${JSON.stringify(target)}!`;
	}
}
