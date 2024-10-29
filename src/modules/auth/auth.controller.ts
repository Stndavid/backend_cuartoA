import { Controller, Body, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){
    }
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto) {
        console.log(userObj);
        return userObj;
    }
    
    @Post('login')
    login(@Body() credentiales: LoginAuthDto) {
        return this.authService.login(credentiales)
}}
