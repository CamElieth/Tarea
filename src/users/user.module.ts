import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UserImage } from './entities/userImage.entity';
import { Driver } from './entities/driver.entity';
import { DriverController } from './controllers/driver.controller';
import { DriversService } from './services/drivers.service';
import { Booking } from './entities/booking.entity';
import { BookingController } from './controllers/booking.controller';
import { BookingsService } from './services/bookings.service';


@Module({
  imports: [TypeOrmModule.forFeature([User, UserImage,Driver,Booking])],
  controllers: [UserController,DriverController,BookingController],
  providers: [UsersService,DriversService,BookingsService],

})
export class UsersModule {}