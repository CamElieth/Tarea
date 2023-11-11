import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateBookingDto } from "../dto/booking.dto";
import { BookingsService } from "../services/bookings.service";


@Controller('booking')
export class BookingController
{
    constructor(private readonly bookingsService:BookingsService){}
    @Post()
    async CreateBooking(@Body() createBookingDto: CreateBookingDto){
        return this.bookingsService.create(createBookingDto);
    }

    @Get()
    findAll(){
        return this.bookingsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.bookingsService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.bookingsService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createBookingDto :CreateBookingDto,
        
    )
    {
        return this.bookingsService.update(id, createBookingDto)
    }
}