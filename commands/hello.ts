import { CommandContext, SlashCommand, SlashCreator } from "slash-create";

export default class HelloCommand extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "hello",
			description: "Says hello to you.",
		});
	}

	async run(ctx: CommandContext) {
		return `Hello, ${ctx.member?.displayName ?? ctx.user.username}!`;
	}
}
