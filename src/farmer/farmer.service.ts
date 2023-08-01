import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { Farmer } from './entities/farmer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FarmerService {
  constructor(
    @InjectRepository(Farmer)
    private farmerRepository: Repository<Farmer>,
  ) { }
  async create(farmer: Farmer) {

    const result = await this.farmerRepository.insert(farmer);
    const { id } = result.identifiers[0];

    return id;
  }

  async findAll() {
    return await this.farmerRepository.find();
  }

  async findOne(id: number) : Promise<Farmer> {
    const farmer = await this.farmerRepository.findOne({
      where: { id }
    });

    return farmer;
  }

  async update(id: number, updateFarmer: Farmer) {
    let farmer = {...await this.findOne(id), name: updateFarmer.name };
    await this.farmerRepository.save(farmer);

    return id;
  }

  async remove(id: number) {
    let farmer = { ...await this.findOne(id)};
    await this.farmerRepository.delete(farmer);

    return id;
  }
}
