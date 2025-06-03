import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { GenericRepository } from 'src/repository/generic.repository';
import { TransactionRepository } from './repository/transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = Transaction.NewTransaction(createTransactionDto);
    await this.transactionRepository.create(transaction);
    return transaction.toJSON();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }

  async findOne(id: string) {
    return (await this.transactionRepository.findById(id)).toJSON();
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const transaction = Transaction.NewTransactionWithId(
      updateTransactionDto,
      id,
    );
    await this.transactionRepository.update(transaction);
    return transaction.toJSON();
  }

  async remove(id: string) {
    await this.transactionRepository.delete(id);
  }
}
