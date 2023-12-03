import { Test, TestingModule } from '@nestjs/testing';
import { CuentassResolver } from './cuentass.resolver';
import { CuentassService } from './cuentass.service';

describe('CuentassResolver', () => {
  let resolver: CuentassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentassResolver, CuentassService],
    }).compile();

    resolver = module.get<CuentassResolver>(CuentassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
