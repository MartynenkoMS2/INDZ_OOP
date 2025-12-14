import { Subscriber } from './Subscriber';
/**
 * Клас для надсилання сповіщень
 */
export declare class NotificationService {
    private recipients;
    private subscribers;
    /**
     * Конструктор для класу NotificationService
     */
    constructor();
    /**
     * Додати адресата до списку
     * @param recipient - адреса електронної пошти або ім'я адресата
     */
    addRecipient(recipient: string): void;
    /**
     * Додати підписника
     * @param subscriber - об'єкт підписника
     */
    addSubscriber(subscriber: Subscriber): void;
    /**
     * Надіслати сповіщення
     * @param text - текст сповіщення
     * @returns результат відправлення (true - успішно, false - помилка)
     */
    send(text: string): boolean;
    /**
     * Отримати список адресатів
     * @returns список адресатів
     */
    getRecipients(): string[];
    /**
     * Отримати список підписників
     * @returns список підписників
     */
    getSubscribers(): Subscriber[];
}
//# sourceMappingURL=NotificationService.d.ts.map