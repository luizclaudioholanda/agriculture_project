import { Test, TestingModule } from '@nestjs/testing';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { State } from './entities/state.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export const mockRepository = jest.fn(() => true);

describe('StateController', () => {
  let controller: StateController;
  let service: StateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StateController],
      providers: [
        StateService,
        {
          provide: getRepositoryToken(State),
          useClass: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<StateController>(StateController);
    service = module.get<StateService>(StateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should make a GET ALL', async () => {
    const result: State[] = [{ id: 1, name: 'São Paulo', city: [], farm: [] }];
    const promise = new Promise<State[]>((resolve, reject) => resolve(result));

    const spy = jest.spyOn(service, 'findAll').mockResolvedValue(promise);
    const serviceResult = await controller.findAll();

    expect(spy).toHaveBeenCalled();
    expect(serviceResult).toEqual(result);
  });
});
