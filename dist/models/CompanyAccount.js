"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class CompanyAccount extends DioAccount_1.DioAccount {
    getLoan(amount) {
        this.ensureActive();
        this.ensurePositiveAmount(amount);
        // Emprestimo soma diretamente no saldo conforme desafio.
        return this.addToBalance(amount);
    }
}
exports.CompanyAccount = CompanyAccount;
