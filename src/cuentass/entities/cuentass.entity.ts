import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Cliente } from 'src/estudiantes/entities/cliente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accounts' })
@ObjectType()
export class Cuenta {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({ default: true })
  @Field(() => Boolean)
  estado: boolean;

  @ManyToOne(() => Cliente, (cliente) => cliente.cuentas, {
    onDelete: 'CASCADE',
  })
  @Field(() => Cliente)
  clientes: Cliente;

  @Column({ type: 'uuid', nullable: true })
  clienteId: string;
}
