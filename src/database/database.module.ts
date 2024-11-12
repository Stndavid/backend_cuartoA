import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from 'src/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject:  [ConfigService],
            useFactory:(config: ConfigService)=>({
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT') || 5432,
                username: config.get('USERNAME') || 'postgres',
                password: config.get('PASSWORD') || '123',
                database: config.get('DATABASE') || 'back_nestAngular_SC',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}'
                ]

            })
        })
    ],
    providers:[...databaseProvider, ConfigService],
    exports:[...databaseProvider]
})
export class DatabaseModule {}
