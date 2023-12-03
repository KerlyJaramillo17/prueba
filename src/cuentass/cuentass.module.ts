import { Module } from '@nestjs/common';
import { CuentassService } from './cuentass.service';
import { CuentassResolver } from './cuentass.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/estudiantes/entities/cliente.entity';
import { Cuenta } from './entities/cuentass.entity';

@Module({
  providers: [CuentassResolver, CuentassService],
  imports: [TypeOrmModule.forFeature([Cuenta, Cliente])],
})
export class CuentassModule {}
