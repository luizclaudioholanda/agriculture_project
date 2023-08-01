import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { plainToInstance } from 'class-transformer';
import { Farmer } from './entities/farmer.entity';

@Controller('farmer')
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Post()
  create(@Body() createFarmerDto: CreateFarmerDto) {
    const farmer = plainToInstance(Farmer, createFarmerDto);
    return this.farmerService.create(farmer);
  }

  @Get()
  findAll() {
    const farmers = this.farmerService.findAll();
    return plainToInstance(CreateFarmerDto, farmers);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmerDto: UpdateFarmerDto) {
    const farmer = plainToInstance(Farmer, updateFarmerDto);
    return this.farmerService.update(+id, farmer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmerService.remove(+id);
  }
}
