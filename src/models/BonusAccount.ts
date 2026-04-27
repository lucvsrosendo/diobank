import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  private static readonly BONUS_VALUE = 10;

  public override deposit(amount: number): number {
    this.ensureActive();
    this.ensurePositiveAmount(amount);

    // Sobrescreve deposito para aplicar o bonus fixo da regra.
    const amountWithBonus = amount + BonusAccount.BONUS_VALUE;
    return this.addToBalance(amountWithBonus);
  }
}
