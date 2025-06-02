import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { GenericRepository } from 'src/repository/generic.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = Transaction.NewTransaction(createTransactionDto);
    await this.transactionRepository.create(transaction);
    return transaction.toJSON();
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  async findOne(id: string) {
    return 'ok';
    // return this.transactionRepository.findOne({ where: id });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    // var transactionId = this.transactionRepository.findOne({ where: id })

    // return this.transactionRepository.update(id, updateTransactionDto);
    return 'ok';
  }

  async remove(id: number) {
    return;
  }
}
