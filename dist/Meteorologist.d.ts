import { WeatherSystemParticipant } from './WeatherSystemParticipant';
import { INotificationPlan } from './INotificationPlan';
/**
 * Клас, що представляє метеоролога
 */
export declare class Meteorologist extends WeatherSystemParticipant implements INotificationPlan {
    private specialization;
    /**
     * Конструктор для класу Meteorologist
     * @param id - ідентифікатор метеоролога
     * @param name - ім'я метеоролога
     * @param specialization - спеціалізація метеоролога
     */
    constructor(id: number, name: string, specialization: string);
    /**
     * Опублікувати прогноз погоди
     */
    publishForecast(): void;
    /**
     * Опублікувати попередження про небезпечні явища
     */
    publishWarning(): void;
    /**
     * Фінальний метод для аналізу точності прогнозів
     */
    analyzeAccuracy(): void;
    /**
     * Реалізація методу інтерфейсу INotificationPlan
     */
    formNotification(): string;
}
//# sourceMappingURL=Meteorologist.d.ts.map