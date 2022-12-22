import { ApplyOptions } from '@sapphire/decorators';
import type { ListenerOptions } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';

@ApplyOptions<ListenerOptions>({
	event: 'ready',
})
export class ReadyListener extends Listener {
	public run() {
		const { logger } = this.container;

		logger.info('I m ready :)');
	}
}
