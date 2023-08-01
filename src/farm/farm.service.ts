import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { Farm } from './entities/farm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmValidator } from './validator/farm-validator';
import { State } from '../state/entities/state.entity';

@Injectable()
export class FarmService {
  constructor(
    @InjectRepository(Farm)
    private farmRepository: Repository<Farm>,
    private farmValidator: FarmValidator
  ) { }
  async create(farm: Farm) {

    const isValid = this.farmValidator.totalAreaValidator(farm);

    if(!isValid) {
      throw new BadRequestException('Area total da fazenda declarada incorretamente!');
    }

    const result = await this.farmRepository.insert(farm);
    const { id } = result.identifiers[0];
    
    return id;
  }

  async findAll() {
    return await this.farmRepository.find()
  }

  async findOne(id: number): Promise<Farm> {
    const farm = await this.farmRepository.findOne({
      where: { id }
    });

    return farm;
  }

  async update(id: number, updateFarm: Farm) {
    let farm = {...await this.findOne(id), name: updateFarm.name };
    await this.farmRepository.save(farm);

    return id;
  }

  async remove(id: number) {
    let farm = { ...await this.findOne(id)};
    await this.farmRepository.delete(farm);

    return id;
  }

  async totalOfFarms(){
    const result = await this.farmRepository
                          .createQueryBuilder('farm')
                          .select('COUNT(*)','totalFarm')
                          .getRawOne();
    
    return result;
  }

  async totalOfHectares(){
    const result = await this.farmRepository
                          .createQueryBuilder('farm')
                          .select('SUM(farm.total_area)','totalArea')
                          .addSelect('COUNT(*)','count')
                          .getRawOne();
    
    return result;
  }

}
