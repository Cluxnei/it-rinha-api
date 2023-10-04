import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CriarPessoa {
  @IsString()
  @IsNotEmpty()
  apelido: string;
  @IsString()
  @IsNotEmpty()
  nome: string;
  @IsString()
  @IsDateString()
  nascimento: string;
  @IsOptional()
  @IsArray()
  stack?: string[];
}
