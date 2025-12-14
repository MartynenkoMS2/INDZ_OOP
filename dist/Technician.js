"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technician = void 0;
const WeatherSystemParticipant_1 = require("./WeatherSystemParticipant");
/**
 * Клас, що представляє техніка
 */
class Technician extends WeatherSystemParticipant_1.WeatherSystemParticipant {
    /**
     * Конструктор для класу Technician
     * @param id - ідентифікатор техніка
     * @param name - ім'я техніка
     * @param level - рівень кваліфікації
     */
    constructor(id, name, level) {
        super(id, name);
        this.level = level;
    }
    /**
     * Обслуговувати датчики
     */
    maintainSensors() {
        console.log(`Технік ${this.getName()} обслуговує датчики`);
    }
    /**
     * Обслуговувати радар
     */
    maintainRadar() {
        console.log(`Технік ${this.getName()} обслуговує радар`);
    }
    /**
     * Реалізація методу інтерфейсу INotificationPlan
     */
    formNotification() {
        return `Сповіщення від техніка ${this.getName()} (${this.level})`;
    }
}
exports.Technician = Technician;
//# sourceMappingURL=Technician.js.map