import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    IsDateString,
  } from 'class-validator';

export class CreateDriverDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    license: string;
  
    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsDateString()
    @IsOptional()
    licenseExpirationDate: Date;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

}    


