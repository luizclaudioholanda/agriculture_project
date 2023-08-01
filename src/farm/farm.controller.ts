import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { FarmService } from './farm.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { plainToInstance } from 'class-transformer';
import { Farm } from './entities/farm.entity';

@Controller('farm')
export class FarmController {
  constructor(private readonly farmService: FarmService) {}

  @Post()
  create(@Body() createFarmDto: CreateFarmDto) {

    const farm = plainToInstance(Farm, createFarmDto);

    try {
      return this.farmService.create(farm);
    } catch (BadRequestException) {

      return {
        status: 400,
        message: BadRequestException.message
      }
    }
  }

  @Get()
  findAll() {
    const farms = this.farmService.findAll();
    return plainToInstance(CreateFarmDto, farms);
  }

  @Get('totalFarms')
  totalFarms(){
    return this.farmService.totalOfFarms();
  }

  @Get('totalHectar')
  totalHectar(){
    return this.farmService.totalOfHectares();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmDto: UpdateFarmDto) {
    const farm = plainToInstance(Farm, updateFarmDto);
    return this.farmService.update(+id, farm);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmService.remove(+id);
  }
}
