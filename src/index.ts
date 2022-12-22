import 'dotenv/config';
import process from 'node:process';
import { SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({
	intents: ['GUILDS'],
	baseUserDirectory: __dirname,
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(console.error);
