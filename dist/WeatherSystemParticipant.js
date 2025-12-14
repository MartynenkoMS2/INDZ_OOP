"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherSystemParticipant = void 0;
/**
 * Абстрактний клас, що представляє учасника метеорологічної системи
 */
class WeatherSystemParticipant {
    /**
     * Конструктор для WeatherSystemParticipant
     * @param id - ідентифікатор учасника
     * @param name - ім'я учасника
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    /**
     * Отримати ім'я учасника
     * @returns ім'я учасника
     */
    getName() {
        return this.name;
    }
    /**
     * Отримати ідентифікатор учасника
     * @returns ідентифікатор
     */
    getId() {
        return this.id;
    }
}
exports.WeatherSystemParticipant = WeatherSystemParticipant;
//# sourceMappingURL=WeatherSystemParticipant.js.map