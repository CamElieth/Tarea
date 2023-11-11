import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('route')
export class Route {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  departureTime: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  arrivalTime: string;

  @Column({ type: 'float',  nullable: false})
  ticketPrice: number;
}

