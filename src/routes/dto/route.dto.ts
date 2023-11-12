import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateRouteDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    description: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    departureTime: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    arrivalTime: string;
  
    @IsNotEmpty()
    @IsNumber()
    ticketPrice: number;


  
  
  
  }