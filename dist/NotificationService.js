"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
/**
 * Клас для надсилання сповіщень
 */
class NotificationService {
    /**
     * Конструктор для класу NotificationService
     */
    constructor() {
        this.recipients = [];
        this.subscribers = [];
        // Ініціалізація завершена
    }
    /**
     * Додати адресата до списку
     * @param recipient - адреса електронної пошти або ім'я адресата
     */
    addRecipient(recipient) {
        this.recipients.push(recipient);
    }
    /**
     * Додати підписника
     * @param subscriber - об'єкт підписника
     */
    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }
    /**
     * Надіслати сповіщення
     * @param text - текст сповіщення
     * @returns результат відправлення (true - успішно, false - помилка)
     */
    send(text) {
        if (this.recipients.length === 0 && this.subscribers.length === 0) {
            console.log('Немає отримувачів або підписників для надсилання сповіщення.');
            return false;
        }
        // Надіслати адресатам
        for (const recipient of this.recipients) {
            console.log(`Надсилання сповіщення: '${text}' до ${recipient}`);
        }
        // Надіслати підписникам
        for (const subscriber of this.subscribers) {
            subscriber.deliverMessage(text);
        }
        return true;
    }
    /**
     * Отримати список адресатів
     * @returns список адресатів
     */
    getRecipients() {
        return this.recipients;
    }
    /**
     * Отримати список підписників
     * @returns список підписників
     */
    getSubscribers() {
        return this.subscribers;
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=NotificationService.js.map