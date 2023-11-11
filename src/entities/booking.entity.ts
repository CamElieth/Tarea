import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Route } from 'src/routes/entities/route.entity';


@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> User)
  @JoinColumn({
   name: 'user_id', // campo que relaciona a mi tabla
   referencedColumnName: 'id' //este es el id del usuario

  })
  user: User;

  @ManyToOne(()=> Route)
  @JoinColumn({
   name: 'route_id', // campo que relaciona a mi tabla
   referencedColumnName: 'id' //este es el id de la ruta

  })
  route: Route;



  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  reservationDate: Date;

  @Column()
  status: string;
}