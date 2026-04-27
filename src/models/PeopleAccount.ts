import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private readonly docId: number;

  constructor(docId: number, name: string, accountNumber: number, initialBalance = 0) {
    super(name, accountNumber, initialBalance);
    this.docId = docId;
  }

  public getDocId(): number {
    return this.docId;
  }
}
