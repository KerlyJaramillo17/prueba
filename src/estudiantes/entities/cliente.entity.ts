import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Cuenta } from 'src/cuentass/entities/cuentass.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
@ObjectType()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  cedula: string;

  @Column()
  @Field(() => String)
  edad: string;

  @Column({ default: true })
  @Field(() => Boolean)
  estado: boolean;

  @OneToMany(() => Cuenta, (cuenta) => cuenta.clientes, { cascade: true })
  @Field(() => [Cuenta], { nullable: true })
  cuentas?: Cuenta[];
}
