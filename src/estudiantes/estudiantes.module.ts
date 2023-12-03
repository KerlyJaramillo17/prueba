import { Module } from '@nestjs/common';
import { ClienteService } from './estudiantes.service';
import { CleintesResolver } from './estudiantes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Cuenta } from 'src/cuentass/entities/cuentass.entity';

@Module({
  providers: [CleintesResolver, ClienteService],
  imports: [TypeOrmModule.forFeature([Cliente, Cuenta])],
})
export class ClientesModule {}
