import { Test, TestingModule } from '@nestjs/testing';
import { CropController } from './crop.controller';
import { CropService } from './crop.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Crop } from './entities/crop.entity';

export const mockRepository = jest.fn(() => true);

describe('CropController', () => {
  let controller: CropController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CropController],
      providers: [CropService,{
        provide: getRepositoryToken(Crop),
        useClass: mockRepository,
      }],
    }).compile();

    controller = module.get<CropController>(CropController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
