import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuentaInput } from './dto/create-cuentass.input';
import { UpdateCuentassInput } from './dto/update-cuentass.input';
import { Cuenta } from './entities/cuentass.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CuentassService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
  ) {}
  async create(createCuentassInput: CreateCuentaInput): Promise<Cuenta> {
    const { clienteId, ...cuentaData } = createCuentassInput;

    const cuenta = this.cuentaRepository.create(cuentaData);
    cuenta.clienteId = clienteId;
    return await this.cuentaRepository.save(cuenta);
  }

  async findAll(): Promise<Cuenta[]> {
    return await this.cuentaRepository.find({ where: { estado: true } });
  }

  async findOne(id: string): Promise<Cuenta> {
    const cuenta = await this.cuentaRepository.findOneBy({ id });
    if (!cuenta) throw new NotFoundException(`Not found`);
    return cuenta;
  }

  async update(id: string, updateCuentassInput: UpdateCuentassInput) {
    const cuenta = await this.findOne(id);

    if (!cuenta) {
      throw new NotFoundException(`Cuenta not found`);
    }
    if (updateCuentassInput.clienteId) {
      cuenta.clienteId = updateCuentassInput.clienteId;
    }
    Object.assign(cuenta, updateCuentassInput);

    return await this.cuentaRepository.save(cuenta);
  }

  async remove(id: string): Promise<Cuenta> {
    const cuenta = await this.findOne(id);

    if (!cuenta) {
      throw new NotFoundException(`account Not found`);
    }
    await this.cuentaRepository.update(id, { estado: false });

    return { ...cuenta, id };
  }
}
