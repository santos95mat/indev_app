import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisteredModule } from './registered/registered.module';

@Module({
  imports: [RegisteredModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
