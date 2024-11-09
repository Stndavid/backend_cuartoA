import {  DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';

export const databaseProvider= [ 
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory:(config: ConfigService)=> { 
            const dataSource= new DataSource({ 
                type:'postgres',
                host:config.get('HOST'),
                port: +config.get('PORT'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE')

             });

             return dataSource.initialize();
        }
    }
 ]
