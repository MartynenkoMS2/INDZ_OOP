import { EventThreshold } from './EventThreshold';
/**
 * Клас, що представляє попередження (warning)
 */
export declare class Warning {
    private message;
    private date;
    private threshold;
    constructor(message: string, date: Date, threshold: EventThreshold);
    getDetails(): string;
    getMessage(): string;
}
//# sourceMappingURL=Warning.d.ts.map