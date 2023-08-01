import { Injectable } from '@nestjs/common';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Crop } from './entities/crop.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CropService {
  constructor(
    @InjectRepository(Crop)
    private cropRepository: Repository<Crop>,
  ) { }

  async create(crop: Crop) {
    const result = await this.cropRepository.insert(crop);
    const { id } = result.identifiers[0];

    return id;
  }

  async findAll() {
    return await this.cropRepository.find();
  }

  async findOne(id: number): Promise<Crop> {
    const crop = await this.cropRepository.findOne({
      where: { id }
    });

    return crop;
  }

  async update(id: number, updateCrop: Crop) {
    let crop = {...await this.findOne(id), name: updateCrop.name };
    await this.cropRepository.save(crop);

    return id;
  }

  async remove(id: number) {
    let crop = { ...await this.findOne(id)};
    await this.cropRepository.delete(crop);

    return id;
  }
}
