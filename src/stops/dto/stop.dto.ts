import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateStopDto {
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
    coordinates: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    estimatedArrivalTime: string;

    @IsNumber()
    @IsNotEmpty()
    route_id: number;


  
  
  
  }