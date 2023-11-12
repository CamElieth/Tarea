import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    IsDateString,
  } from 'class-validator';

export class CreateBookingDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    status: string;
  
    @IsDateString()
    @IsOptional()
    reservationDate: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    route_id: number;

}  