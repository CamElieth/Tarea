import { Driver } from 'src/users/driver.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @ManyToOne(()=> Driver)
  @JoinColumn({
   name: 'driver_id', // campo que relaciona a mi tabla
   referencedColumnName: 'id' //este es el id del conductor

  })
  driver: Driver;

  @Column({ type: 'varchar', length: 100, nullable: false })
  model: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  plate: string;

  @Column({ type: 'int4', nullable: false })
  capacity: number;

  @Column({ type: 'int8', nullable: false })
  year: number;
}
