
import { EventThreshold } from './EventThreshold';

/**
 * Клас, що представляє попередження (warning)
 */
export class Warning {
	private message: string;
	private date: Date;
	private threshold: EventThreshold;

	constructor(message: string, date: Date, threshold: EventThreshold) {
		this.message = message;
		this.date = date;
		this.threshold = threshold;
	}

	public getDetails(): string {
		const dateStr = this.date.toISOString().split('T')[0];
		return `${this.message} (${dateStr}) - Поріг: ${this.threshold.getLevel()}`;
	}

	public getMessage(): string {
		return this.message;
	}
}

