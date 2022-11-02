import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisteredService } from './registered.service';
import { CreateRegisteredDto } from './dto/create-registered.dto';
import { UpdateRegisteredDto } from './dto/update-registered.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registered')
@Controller('registered')
export class RegisteredController {
  constructor(private readonly registeredService: RegisteredService) {}

  @Post()
  @ApiOperation({
    summary: 'Para cadastrar uma pessoa',
  })
  create(@Body() dto: CreateRegisteredDto) {
    return this.registeredService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Para listar todas as pessoa',
  })
  findAll() {
    return this.registeredService.findAll();
  }
}
