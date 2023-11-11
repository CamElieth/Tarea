import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class CreateVehicleDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    model: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    plate: string;
  
    @IsNotEmpty()
    @IsNumber()
    capacity: number;
  
    @IsNotEmpty()
    @IsNumber()
    year: number;

    @IsNotEmpty()
    @IsNumber()
    driver_id: number;
  
  
  
  }