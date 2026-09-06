import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckerService } from './health-checker.service.js';

describe('HealthCheckerService', () => {
  let service: HealthCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthCheckerService],
    }).compile();

    service = module.get<HealthCheckerService>(HealthCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
