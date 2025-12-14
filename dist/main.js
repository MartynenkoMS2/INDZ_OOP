"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meteorologist_1 = require("./Meteorologist");
const Technician_1 = require("./Technician");
const NotificationService_1 = require("./NotificationService");
const Subscriber_1 = require("./Subscriber");
const Warning_1 = require("./Warning");
const Region_1 = require("./Region");
const EventThreshold_1 = require("./EventThreshold");
/**
 * Головний клас для демонстрації роботи системи метеорологічного сервісу
 */
class Main {
    static main() {
        console.log('=== Демонстрація роботи метеорологічного сервісу ===\n');
        // Створення об'єктів системи
        const meteorologist = new Meteorologist_1.Meteorologist(1, 'Петро Іванов', 'Синоптик');
        const technician = new Technician_1.Technician(2, 'Іван Петренко', 'Старший технік');
        const notificationService = new NotificationService_1.NotificationService();
        // Додавання підписників та адресатів
        notificationService.addSubscriber(new Subscriber_1.Subscriber('Іван Смит'));
        notificationService.addSubscriber(new Subscriber_1.Subscriber('Марія Коваленко'));
        notificationService.addRecipient('weather@example.com');
        // Демонстрація роботи
        console.log('--- Опублікування прогнозу ---');
        meteorologist.publishForecast();
        console.log('\n--- Опублікування попередження ---');
        meteorologist.publishWarning();
        console.log('\n--- Аналіз точності ---');
        meteorologist.analyzeAccuracy();
        console.log('\n--- Обслуговування обладнання ---');
        technician.maintainSensors();
        technician.maintainRadar();
        console.log('\n--- Формування сповіщень ---');
        const meteorologistNotification = meteorologist.formNotification();
        const technicianNotification = technician.formNotification();
        console.log('1. ' + meteorologistNotification);
        console.log('2. ' + technicianNotification);
        console.log('\n--- Надсилання сповіщень ---');
        notificationService.send(meteorologistNotification);
        console.log('\n--- Робота з регіонами та попередженнями ---');
        const region = new Region_1.Region('Київ');
        const threshold = new EventThreshold_1.EventThreshold(5);
        const warning = new Warning_1.Warning('Сильна гроза', new Date(), threshold);
        region.addWarning(warning);
        console.log('Деталі попередження: ' + warning.getDetails());
        console.log('\n=== Демонстрація завершена ===');
    }
}
// Запуск головної програми
Main.main();
//# sourceMappingURL=main.js.map