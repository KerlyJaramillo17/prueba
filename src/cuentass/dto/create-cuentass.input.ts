import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCuentaInput {
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  estado: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description: string;

  @Field(() => String)
  @IsNotEmpty()
  clienteId: string;
}
