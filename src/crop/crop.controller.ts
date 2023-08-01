import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';
import { plainToInstance } from 'class-transformer';
import { Crop } from './entities/crop.entity';

@Controller('crop')
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Post()
  create(@Body() createCropDto: CreateCropDto) {
    const crop = plainToInstance(Crop, createCropDto);

    return this.cropService.create(crop);
  }

  @Get()
  findAll() {
    const crops = this.cropService.findAll();
    return plainToInstance(CreateCropDto, crops);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cropService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCropDto: UpdateCropDto) {
    const crop = plainToInstance(Crop, updateCropDto);
    return this.cropService.update(+id, crop);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cropService.remove(+id);
  }
}
