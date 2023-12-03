import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteInput, UpdateEstudianteInput } from './dto/inputs';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly estudiantesRepository: Repository<Cliente>,
  ) {}

  async create(createEstudianteInput: CreateClienteInput): Promise<Cliente> {
    const newEstudiante = this.estudiantesRepository.create(
      createEstudianteInput,
    );
    return await this.estudiantesRepository.save(newEstudiante);
  }

  async findAll(): Promise<Cliente[]> {
    return this.estudiantesRepository.find({ where: { estado: true } });
  }

  async findOne(id: string): Promise<Cliente> {
    const estudiante = await this.estudiantesRepository.findOneBy({ id });
    if (!estudiante) throw new NotFoundException(`Not found`);
    return estudiante;
  }

  async update(
    id: string,
    updateEstudianteInput: UpdateEstudianteInput,
  ): Promise<Cliente> {
    const estudiante = await this.findOne(id);
    if (!estudiante) {
      throw new NotFoundException(`client not found`);
    }

    Object.assign(estudiante, updateEstudianteInput);

    return this.estudiantesRepository.save(estudiante);
  }

  async remove(id: string): Promise<Cliente> {
    const estudiante = await this.findOne(id);

    if (!estudiante) {
      throw new NotFoundException(`student Not found`);
    }
    await this.estudiantesRepository.update(id, { estado: false });

    return { ...estudiante, id };
  }
}
