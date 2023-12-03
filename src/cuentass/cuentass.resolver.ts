import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CuentassService } from './cuentass.service';
import { Cuenta } from './entities/cuentass.entity';
import { CreateCuentaInput } from './dto/create-cuentass.input';
import { UpdateCuentassInput } from './dto/update-cuentass.input';

@Resolver(() => Cuenta)
export class CuentassResolver {
  constructor(private readonly cuentassService: CuentassService) {}

  @Mutation(() => Cuenta)
  createCuentass(
    @Args('createCuentassInput') createCuentassInput: CreateCuentaInput,
  ) {
    return this.cuentassService.create(createCuentassInput);
  }

  @Query(() => [Cuenta], { name: 'cuentass' })
  findAll() {
    return this.cuentassService.findAll();
  }

  @Mutation(() => Cuenta)
  updateCuentass(
    @Args('updateCuentassInput') updateCuentassInput: UpdateCuentassInput,
  ): Promise<Cuenta> {
    return this.cuentassService.update(
      updateCuentassInput.id,
      updateCuentassInput,
    );
  }

  @Mutation(() => Cuenta)
  removeCuentass(@Args('id', { type: () => ID }) id: string): Promise<Cuenta> {
    return this.cuentassService.remove(id);
  }
}
