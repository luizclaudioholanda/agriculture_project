import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entities/state.entity';
import { Repository } from 'typeorm';
import { Farm } from '../farm/entities/farm.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {}

  async create(state: State) {
    const result = await this.stateRepository.insert(state);
    const { id } = result.identifiers[0];
    return id;
  }

  async findAll() {
    return await this.stateRepository.find();
  }

  async findOne(id: number): Promise<State> {
    const state = await this.stateRepository.findOne({
      where: { id },
    });

    return state;
  }

  async update(id: number, updateState: State) {
    const state = { ...(await this.findOne(id)), name: updateState.name };
    await this.stateRepository.save(state);

    return id;
  }

  async remove(id: number) {
    const state = { ...(await this.findOne(id)) };
    await this.stateRepository.delete(state);

    return id;
  }

  async totalFarmByState() {
    const result = await this.stateRepository
      .createQueryBuilder('state')
      .select('state.name')
      .addSelect("COUNT('state.id')", 'totalFarms')
      .innerJoin(Farm, 'farm', 'state.id = farm.stateId')
      .groupBy('state.name')
      .getRawMany();
    return result;
  }
}
