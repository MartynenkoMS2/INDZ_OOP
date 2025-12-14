"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
/**
 * Клас, що представляє регіон для відправлення попереджень
 */
class Region {
    /**
     * Конструктор для класу Region
     * @param name - назва регіону
     */
    constructor(name) {
        this.warnings = [];
        this.name = name;
    }
    /**
     * Додати попередження до регіону
     * @param warning - попередження для додавання
     */
    addWarning(warning) {
        this.warnings.push(warning);
        console.log(`Попередження додано до регіону ${this.name}`);
    }
    /**
     * Отримати назву регіону
     * @returns назва регіону
     */
    getName() {
        return this.name;
    }
    /**
     * Отримати список попереджень
     * @returns список попереджень
     */
    getWarnings() {
        return this.warnings;
    }
}
exports.Region = Region;
//# sourceMappingURL=Region.js.map