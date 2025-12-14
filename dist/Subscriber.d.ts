/**
 * Клас, що представляє підписника на сповіщення
 */
export declare class Subscriber {
    private name;
    /**
     * Конструктор для класу Subscriber
     * @param name - ім'я підписника
     */
    constructor(name: string);
    /**
     * Доставити повідомлення підписнику
     * @param text - текст повідомлення
     */
    deliverMessage(text: string): void;
    /**
     * Отримати ім'я підписника
     * @returns ім'я підписника
     */
    getName(): string;
}
//# sourceMappingURL=Subscriber.d.ts.map