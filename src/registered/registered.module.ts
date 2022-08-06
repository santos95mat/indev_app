import { Module } from '@nestjs/common';
import { RegisteredService } from './registered.service';
import { RegisteredController } from './registered.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RegisteredController],
  providers: [RegisteredService]
})
export class RegisteredModule {}
