import { Test, TestingModule } from '@nestjs/testing';
import { FarmController } from './farm.controller';
import { FarmService } from './farm.service';
import { FarmValidator } from './validator/farm-validator';
import { Farm } from './entities/farm.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockRepository = jest.fn(() => true);

describe('FarmController', () => {
  let controller: FarmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmController],
      providers: [FarmService, FarmValidator,{
        provide: getRepositoryToken(Farm),
        useClass: mockRepository,
      }],
    }).compile();

    controller = module.get<FarmController>(FarmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
