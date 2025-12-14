import { WeatherSystemParticipant } from './WeatherSystemParticipant';
import { INotificationPlan } from './INotificationPlan';
/**
 * Клас, що представляє техніка
 */
export declare class Technician extends WeatherSystemParticipant implements INotificationPlan {
    private level;
    /**
     * Конструктор для класу Technician
     * @param id - ідентифікатор техніка
     * @param name - ім'я техніка
     * @param level - рівень кваліфікації
     */
    constructor(id: number, name: string, level: string);
    /**
     * Обслуговувати датчики
     */
    maintainSensors(): void;
    /**
     * Обслуговувати радар
     */
    maintainRadar(): void;
    /**
     * Реалізація методу інтерфейсу INotificationPlan
     */
    formNotification(): string;
}
//# sourceMappingURL=Technician.d.ts.map