import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Driver } from './driver.entity';
import { Booking } from './booking.entity';
import { UserImage } from './userImage.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registrationDate: Date;


  // Define relaciones con otras entidades si es necesario

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UserImage[];

  @OneToMany(() => Driver, (driver) => driver.user)
  drivers: Driver[];

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

}


