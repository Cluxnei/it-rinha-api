import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CriarPessoa {
  @IsString()
  @IsNotEmpty()
  apelido?: string | null;

  @IsString()
  @IsNotEmpty()
  nome?: string;

  @IsString()
  @IsDateString()
  nascimento?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @MinLength(1, { each: true })
  @MaxLength(32, { each: true })
  stack?: string[];
}
