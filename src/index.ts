import './injectors';
import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { SapphireClient } from '@sapphire/framework';
import process from 'node:process';

const client = new SapphireClient({
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	baseUserDirectory: __dirname,
});

client.prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.DATABASE_URL,
		},
	},
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(console.error);
