"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meteorologist = void 0;
const WeatherSystemParticipant_1 = require("./WeatherSystemParticipant");
/**
 * Клас, що представляє метеоролога
 */
class Meteorologist extends WeatherSystemParticipant_1.WeatherSystemParticipant {
    /**
     * Конструктор для класу Meteorologist
     * @param id - ідентифікатор метеоролога
     * @param name - ім'я метеоролога
     * @param specialization - спеціалізація метеоролога
     */
    constructor(id, name, specialization) {
        super(id, name);
        this.specialization = specialization;
    }
    /**
     * Опублікувати прогноз погоди
     */
    publishForecast() {
        console.log(`Метеоролог ${this.getName()} публікує прогноз погоди`);
    }
    /**
     * Опублікувати попередження про небезпечні явища
     */
    publishWarning() {
        console.log(`Метеоролог ${this.getName()} публікує попередження про небезпечні явища`);
    }
    /**
     * Фінальний метод для аналізу точності прогнозів
     */
    analyzeAccuracy() {
        console.log(`Метеоролог ${this.getName()} аналізує точність прогнозів`);
    }
    /**
     * Реалізація методу інтерфейсу INotificationPlan
     */
    formNotification() {
        return `Сповіщення від метеоролога ${this.getName()} (${this.specialization})`;
    }
}
exports.Meteorologist = Meteorologist;
//# sourceMappingURL=Meteorologist.js.map