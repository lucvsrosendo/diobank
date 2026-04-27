"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonusAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class BonusAccount extends DioAccount_1.DioAccount {
    deposit(amount) {
        this.ensureActive();
        this.ensurePositiveAmount(amount);
        // Sobrescreve deposito para aplicar o bonus fixo da regra.
        const amountWithBonus = amount + BonusAccount.BONUS_VALUE;
        return this.addToBalance(amountWithBonus);
    }
}
exports.BonusAccount = BonusAccount;
BonusAccount.BONUS_VALUE = 10;
