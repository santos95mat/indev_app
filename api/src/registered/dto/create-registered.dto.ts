import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateRegisteredDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Matheus Rodrigues',
    description: 'Nome da pessoa a ser cadastrada',
  })
  nome: string;

  @IsEmail()
  @ApiProperty({
    example: 'matheus@email.com',
    description: 'Email da pessoa a ser cadastrada',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '05/03/1995',
    description:
      'Data de nascimento da pessoa a ser cadastrada',
  })
  nascimento: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '(31) 99636-1530',
    description:
      'Telefone de contato da pessoa a ser cadastrada',
  })
  telefone: string;
}
