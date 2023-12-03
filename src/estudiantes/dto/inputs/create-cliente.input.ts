import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { CreateCuentaInput } from 'src/cuentass/dto/create-cuentass.input';

@InputType()
export class CreateClienteInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  cedula: string;

  @Field(() => String)
  @IsNotEmpty()
  edad: string;

  @Field(() => Boolean)
  @IsOptional()
  estado: boolean;

  @Field(() => [CreateCuentaInput], { nullable: true })
  @IsOptional()
  cuentas: CreateCuentaInput[];
}
