import { typeTransactionRole } from 'src/types/common-types';
import { Transaction } from './../entities/transaction.entity';
import { EntitySchema } from 'typeorm';

export const TransactionSchema = new EntitySchema<Transaction>({
  name: 'transactions',
  tableName: 'transactions',
  target: Transaction,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true,
    },
    type: {
      type: 'enum',
      enum: typeTransactionRole,
      nullable: false,
    },
    category: {
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    date: {
      type: 'timestamp',
      nullable: false,
    },
    description: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
  },
});
