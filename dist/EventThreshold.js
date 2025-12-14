"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventThreshold = void 0;
/**
 * Клас, що представляє порог небезпеки événтю
 */
class EventThreshold {
    /**
     * Конструктор для класу EventThreshold
     * @param level - рівень небезпеки
     */
    constructor(level) {
        this.dangerLevel = level;
    }
    /**
     * Отримати рівень небезпеки
     * @returns рівень небезпеки
     */
    getLevel() {
        return this.dangerLevel;
    }
}
exports.EventThreshold = EventThreshold;
//# sourceMappingURL=EventThreshold.js.map