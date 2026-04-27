"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankError_1 = require("./errors/BankError");
const BonusAccount_1 = require("./models/BonusAccount");
const CompanyAccount_1 = require("./models/CompanyAccount");
const PeopleAccount_1 = require("./models/PeopleAccount");
function main() {
    const peopleAccount = new PeopleAccount_1.PeopleAccount(123456789, "Nath", 1);
    const companyAccount = new CompanyAccount_1.CompanyAccount("DIO", 2);
    const bonusAccount = new BonusAccount_1.BonusAccount("Premium User", 3);
    try {
        const peopleAfterDeposit = peopleAccount.deposit(100);
        const peopleAfterWithdraw = peopleAccount.withdraw(40);
        const companyAfterLoan = companyAccount.getLoan(500);
        const companyAfterDeposit = companyAccount.deposit(100);
        const bonusAfterDeposit = bonusAccount.deposit(100); // Resultado esperado: +110
        console.log("=== PeopleAccount ===");
        console.log({
            name: peopleAccount.getName(),
            accountNumber: peopleAccount.getAccountNumber(),
            docId: peopleAccount.getDocId(),
            balanceAfterDeposit: peopleAfterDeposit,
            balanceAfterWithdraw: peopleAfterWithdraw
        });
        console.log("=== CompanyAccount ===");
        console.log({
            name: companyAccount.getName(),
            accountNumber: companyAccount.getAccountNumber(),
            balanceAfterLoan: companyAfterLoan,
            balanceAfterDeposit: companyAfterDeposit
        });
        console.log("=== BonusAccount ===");
        console.log({
            name: bonusAccount.getName(),
            accountNumber: bonusAccount.getAccountNumber(),
            balanceAfterDeposit: bonusAfterDeposit
        });
    }
    catch (error) {
        if (error instanceof BankError_1.BankError) {
            console.error(`Erro de negocio: ${error.message}`);
            return;
        }
        console.error("Erro inesperado ao executar o app.", error);
    }
}
main();
