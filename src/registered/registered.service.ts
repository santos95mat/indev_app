import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateRegisteredDto } from './dto/create-registered.dto';
import { UpdateRegisteredDto } from './dto/update-registered.dto';
import { Registered } from './entities/registered.entity';

@Injectable()
export class RegisteredService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRegisteredDto): Promise<Registered | void> {
    const data: CreateRegisteredDto = {
      nome: dto.nome,
      email: dto.email,
      nascimento: dto.nascimento,
      telefone: dto.telefone
    };

    return await this.prisma.registered
    .create({ data })
    .catch(handleErrorConstraintUnique);
  }

  async findAll(): Promise<Registered[]> {
    return await this.prisma.registered.findMany();
  }

}
