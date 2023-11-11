import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from "../entities/booking.entity";
import { CreateBookingDto } from '../dto/booking.dto';



@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepo: Repository<Booking>,
  ) {}

  //crear una reserva
  async create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepo.create(createBookingDto);
    await this.bookingRepo.save(booking);
    return booking;
  }


    //Encontrar una reserva
    findOne(id: number){
        return this.bookingRepo.findOne({
            where: {id},

        });
    }
    //mostrar todas las reservas
    findAll(){
        return   this.bookingRepo.find({
            order: {id: 'ASC'},

        });
    }
    //eliminar una reserva
    async remove(id:number){
        const booking =await this.findOne(id);
        await this.bookingRepo.remove(booking);
        return 'reserva eliminada';
    }

    //actualizar una reserva
    async update(id: number, cambios: CreateBookingDto){
        const oldBooking = await this.findOne(id);
        const updateBooking = await this.bookingRepo.merge(oldBooking,cambios);
        return this.bookingRepo.save(updateBooking);
    }

    }