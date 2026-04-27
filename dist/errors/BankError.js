"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankError = void 0;
class BankError extends Error {
    constructor(message) {
        super(message);
        this.name = "BankError";
    }
}
exports.BankError = BankError;
