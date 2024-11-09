import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from 'src/config/config.module';

@Module({
    imports: [ConfigModule],
    providers:[...databaseProvider, ConfigService],
    exports:[...databaseProvider]
})
export class DatabaseModule {}
