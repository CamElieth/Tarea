import { Route } from 'src/routes/entities/route.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('stop')
export class Stop {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  coordinates: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  estimatedArrivalTime: string;

  @ManyToOne(()=> Route)
  @JoinColumn({
   name: 'route_id', // campo que relaciona a mi tabla
   referencedColumnName: 'id' //este es el id de la ruta

  })
  route: Route;
}



