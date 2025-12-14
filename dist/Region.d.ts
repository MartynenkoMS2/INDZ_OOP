import { Warning } from './Warning';
/**
 * Клас, що представляє регіон для відправлення попереджень
 */
export declare class Region {
    private name;
    private warnings;
    /**
     * Конструктор для класу Region
     * @param name - назва регіону
     */
    constructor(name: string);
    /**
     * Додати попередження до регіону
     * @param warning - попередження для додавання
     */
    addWarning(warning: Warning): void;
    /**
     * Отримати назву регіону
     * @returns назва регіону
     */
    getName(): string;
    /**
     * Отримати список попереджень
     * @returns список попереджень
     */
    getWarnings(): Warning[];
}
//# sourceMappingURL=Region.d.ts.map