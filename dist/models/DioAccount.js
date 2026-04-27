"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
const BankError_1 = require("../errors/BankError");
class DioAccount {
    constructor(name, accountNumber, initialBalance = 0) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.active = true;
    }
    getName() {
        return this.name;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    isActive() {
        return this.active;
    }
    deposit(amount) {
        this.ensureActive();
        this.ensurePositiveAmount(amount);
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        this.ensureActive();
        this.ensurePositiveAmount(amount);
        // Mantem a regra de negocio perto da operacao de saque.
        if (this.balance < amount) {
            throw new BankError_1.BankError("Saldo insuficiente para saque.");
        }
        this.balance -= amount;
        return this.balance;
    }
    addToBalance(amount) {
        this.balance += amount;
        return this.balance;
    }
    ensureActive() {
        if (!this.active) {
            throw new BankError_1.BankError("Conta invalida: operacao nao permitida.");
        }
    }
    ensurePositiveAmount(amount) {
        if (amount <= 0) {
            throw new BankError_1.BankError("O valor informado deve ser maior que zero.");
        }
    }
}
exports.DioAccount = DioAccount;
