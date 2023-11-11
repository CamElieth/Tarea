import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/users.controller';
import { UsersService } from '../services/users.service';
import { Booking } from './entities/booking.entity';
import { Driver } from './entities/driver.entity';
import { DriverController } from './controllers/driver.controller';
import { BookingController } from './controllers/booking.controller';
import { DriversService } from '../services/drivers.service';
import { BookingsService } from '../services/bookings.service';
import { UserImage } from './entities/userImage.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Booking, Driver,  UserImage])],
  controllers: [UserController, DriverController, BookingController],
  providers: [UsersService, DriversService, BookingsService],
})
export class UsersModule {}
