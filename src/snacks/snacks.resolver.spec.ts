import { Test, TestingModule } from '@nestjs/testing';
import { SnacksResolver } from './snacks.resolver';
import { SnacksService } from './snacks.service';

describe('SnacksResolver', () => {
  let resolver: SnacksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnacksResolver, SnacksService],
    }).compile();

    resolver = module.get<SnacksResolver>(SnacksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
