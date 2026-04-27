import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  public getLoan(amount: number): number {
    this.ensureActive();
    this.ensurePositiveAmount(amount);

    // Emprestimo soma diretamente no saldo conforme desafio.
    return this.addToBalance(amount);
  }
}
