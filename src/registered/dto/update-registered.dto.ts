import { PartialType } from '@nestjs/swagger';
import { CreateRegisteredDto } from './create-registered.dto';

export class UpdateRegisteredDto extends PartialType(CreateRegisteredDto) {}
