import { Test, TestingModule } from '@nestjs/testing';
import { CuentassService } from './cuentass.service';

describe('CuentassService', () => {
  let service: CuentassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentassService],
    }).compile();

    service = module.get<CuentassService>(CuentassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
