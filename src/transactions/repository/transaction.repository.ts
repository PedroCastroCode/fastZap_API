import { Injectable } from '@nestjs/common';
import { Transaction } from '../entities/transaction.entity';
import { GenericRepository } from 'src/repository/generic.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionRepository extends GenericRepository<Transaction> {
  entityName: string = 'Transactions';

  constructor(public repository: Repository<Transaction>) {
    super(repository);
  }
}
