"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warning = void 0;
/**
 * Клас, що представляє попередження (warning)
 */
class Warning {
    constructor(message, date, threshold) {
        this.message = message;
        this.date = date;
        this.threshold = threshold;
    }
    getDetails() {
        const dateStr = this.date.toISOString().split('T')[0];
        return `${this.message} (${dateStr}) - Поріг: ${this.threshold.getLevel()}`;
    }
    getMessage() {
        return this.message;
    }
}
exports.Warning = Warning;
//# sourceMappingURL=Warning.js.map