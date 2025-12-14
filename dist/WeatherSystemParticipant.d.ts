/**
 * Абстрактний клас, що представляє учасника метеорологічної системи
 */
export declare abstract class WeatherSystemParticipant {
    private id;
    private name;
    /**
     * Конструктор для WeatherSystemParticipant
     * @param id - ідентифікатор учасника
     * @param name - ім'я учасника
     */
    constructor(id: number, name: string);
    /**
     * Отримати ім'я учасника
     * @returns ім'я учасника
     */
    getName(): string;
    /**
     * Отримати ідентифікатор учасника
     * @returns ідентифікатор
     */
    getId(): number;
}
//# sourceMappingURL=WeatherSystemParticipant.d.ts.map