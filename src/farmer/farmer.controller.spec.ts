import { Test, TestingModule } from '@nestjs/testing';
import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmer.service';
import { Farmer } from './entities/farmer.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockRepository = jest.fn(() => true);

describe('FarmerController', () => {
  let controller: FarmerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmerController],
      providers: [FarmerService,{
        provide: getRepositoryToken(Farmer),
        useClass: mockRepository,
      }],
    }).compile();

    controller = module.get<FarmerController>(FarmerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
