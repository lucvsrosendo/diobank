import { BankError } from "../errors/BankError";

export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private active: boolean;

  constructor(name: string, accountNumber: number, initialBalance = 0) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.active = true;
  }

  public getName(): string {
    return this.name;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public getBalance(): number {
    return this.balance;
  }

  public isActive(): boolean {
    return this.active;
  }

  public deposit(amount: number): number {
    this.ensureActive();
    this.ensurePositiveAmount(amount);

    this.balance += amount;
    return this.balance;
  }

  public withdraw(amount: number): number {
    this.ensureActive();
    this.ensurePositiveAmount(amount);

    // Mantem a regra de negocio perto da operacao de saque.
    if (this.balance < amount) {
      throw new BankError("Saldo insuficiente para saque.");
    }

    this.balance -= amount;
    return this.balance;
  }

  protected addToBalance(amount: number): number {
    this.balance += amount;
    return this.balance;
  }

  protected ensureActive(): void {
    if (!this.active) {
      throw new BankError("Conta invalida: operacao nao permitida.");
    }
  }

  protected ensurePositiveAmount(amount: number): void {
    if (amount <= 0) {
      throw new BankError("O valor informado deve ser maior que zero.");
    }
  }
}
