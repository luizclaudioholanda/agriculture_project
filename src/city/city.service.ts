import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async create(city: City) {
    const result = await this.cityRepository.insert(city);
    const { id } = result.identifiers[0];
    return id;
  }

  async findAll() {
    return await this.cityRepository.find();
  }

  async findOne(id: number) : Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { id }
    });

    return city;
  }

  async update(id: number, updateCity: City) {
    let city = {...await this.findOne(id), name: updateCity.name };
    await this.cityRepository.save(city);

    return id;
  }

  async remove(id: number) {
    let city = { ...await this.findOne(id)};
    await this.cityRepository.delete(city);

    return id;
  }
}
