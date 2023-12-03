import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ClienteService } from './estudiantes.service';
import { Cliente } from './entities/cliente.entity';
import { UpdateEstudianteInput, CreateClienteInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Cliente)
export class CleintesResolver {
  constructor(private readonly estudiantesService: ClienteService) {}

  @Mutation(() => Cliente)
  async createCliente(
    @Args('createClienteInput') createEstudianteInput: CreateClienteInput,
  ): Promise<Cliente> {
    return this.estudiantesService.create(createEstudianteInput);
  }

  @Query(() => [Cliente], { name: 'clients' })
  async findAll(): Promise<Cliente[]> {
    return this.estudiantesService.findAll();
  }

  @Query(() => Cliente, { name: 'clients' })
  findOne(
    @Args('id', { type: () => ID }, ParseUUIDPipe) id: string,
  ): Promise<Cliente> {
    return this.estudiantesService.findOne(id);
  }

  @Mutation(() => Cliente)
  updateCliente(
    @Args('updateEstudianteInput') updateEstudianteInput: UpdateEstudianteInput,
  ): Promise<Cliente> {
    return this.estudiantesService.update(
      updateEstudianteInput.id,
      updateEstudianteInput,
    );
  }

  @Mutation(() => Cliente)
  removeCliente(@Args('id', { type: () => ID }) id: string): Promise<Cliente> {
    return this.estudiantesService.remove(id);
  }
}
