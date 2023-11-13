import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}