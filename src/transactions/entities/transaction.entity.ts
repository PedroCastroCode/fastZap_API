import { Entity } from 'src/repository/generic.repository';
import { CreateTransactionDto } from '../dto/create-transaction.dto';

export class Transaction implements Entity {
  id: string;
  type: string;
  date: Date;
  category: string;
  description: string;

  constructor(partial: Partial<Transaction>) {
    Object.assign(this, partial);
  }

  static NewTransaction(data: CreateTransactionDto) {
    const input: Partial<Transaction> = {
      type: data.type,
      category: data.category,
      date: data.date,
      description: data.description,
    };

    const transaction = new Transaction(input);
    return transaction;
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      category: this.category,
      date: this.date,
      description: this.description,
    };
  }
}
