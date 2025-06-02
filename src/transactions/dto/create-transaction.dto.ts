import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { typeTransactionRole } from 'src/types/common-types';

export class CreateTransactionDto {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsEnum(typeTransactionRole)
  type: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsString()
  @IsOptional()
  description: string;
}
