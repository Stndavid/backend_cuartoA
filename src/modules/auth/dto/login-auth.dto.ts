import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { User } from '../interface/user.interface';

export class LoginAuthDto implements User { 
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @MinLength(6)
    @MaxLength(15)
    @IsNotEmpty()
    password: string;
 } 