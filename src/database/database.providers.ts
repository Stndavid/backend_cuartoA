import {  DataSource } from 'typeorm';

export const databaseProvider= [ 
    {
        provide: 'DATABASE_CONNECTION',
        useFactory:()=> { 
            const dataSource= new DataSource({ 
                type:'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'back_nestAngular_SC'

             });

             return dataSource.initialize();
        }
    }
 ]
