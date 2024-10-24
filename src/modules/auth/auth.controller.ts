import { Controller, Body, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto) {
        userObj.email
        userObj.password 
    }
}
