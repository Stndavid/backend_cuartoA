import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwr-auth.guard';


@Module({
  imports :[
    JwtModule.register({
      secret: "MI CODIGO SECRETO",
      signOptions:{expiresIn: '1d'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard
  ]

})
export class AuthModule {}
