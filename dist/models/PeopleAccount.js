"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class PeopleAccount extends DioAccount_1.DioAccount {
    constructor(docId, name, accountNumber, initialBalance = 0) {
        super(name, accountNumber, initialBalance);
        this.docId = docId;
    }
    getDocId() {
        return this.docId;
    }
}
exports.PeopleAccount = PeopleAccount;
