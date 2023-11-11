import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';


@Entity('driver')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> User)
  @JoinColumn({
   name: 'user_id', // campo que relaciona a mi tabla
   referencedColumnName: 'id' //este es el id del usuario

  })
  user: User;

  @Column()
  license: string;

  @Column({ type: 'timestamp' })
  licenseExpirationDate: Date;

  @Column({ default: 0 })
  rating: number;
    vehicles: any;
}