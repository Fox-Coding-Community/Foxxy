import { ApplyOptions } from '@sapphire/decorators';
import type { ListenerOptions } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';

@ApplyOptions<ListenerOptions>({
	event: 'interactionCreate',
})
export class InteractionListener extends Listener {
	public run() {
		const { logger } = this.container;
		logger.info('interaction started');
	}
}
