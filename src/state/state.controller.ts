import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { plainToInstance } from 'class-transformer';
import { State } from './entities/state.entity';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  create(@Body() createStateDto: CreateStateDto) {

    const state = plainToInstance(State, createStateDto);
    return this.stateService.create(state);
  }

  @Get()
  async findAll() {
    const states = this.stateService.findAll();

    return plainToInstance(CreateStateDto, states);
  }

  @Get('farmsByState')
  async totalFarmByState(){
    return this.stateService.totalFarmByState();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }

    @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    const state = plainToInstance(State, updateStateDto);

    return this.stateService.update(+id, state);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stateService.remove(+id);
  }
}
