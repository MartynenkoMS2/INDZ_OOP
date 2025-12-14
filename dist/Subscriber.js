"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
/**
 * Клас, що представляє підписника на сповіщення
 */
class Subscriber {
    /**
     * Конструктор для класу Subscriber
     * @param name - ім'я підписника
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Доставити повідомлення підписнику
     * @param text - текст повідомлення
     */
    deliverMessage(text) {
        console.log(`Підписник ${this.name} отримав повідомлення: ${text}`);
    }
    /**
     * Отримати ім'я підписника
     * @returns ім'я підписника
     */
    getName() {
        return this.name;
    }
}
exports.Subscriber = Subscriber;
//# sourceMappingURL=Subscriber.js.map