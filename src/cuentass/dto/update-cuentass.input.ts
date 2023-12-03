import { IsUUID } from 'class-validator';
import { CreateCuentaInput } from './create-cuentass.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCuentassInput extends PartialType(CreateCuentaInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
