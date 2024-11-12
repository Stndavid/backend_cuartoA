import { DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => { 
            const dataSource = new DataSource({ 
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT') || 5432,
                username: config.get('USERNAME') || 'postgres',
                password: config.get('PASSWORD') || '123',
                database: config.get('DATABASE') || 'back_nestAngular_SC',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}'
                ]
            });

            return dataSource.initialize();
        },
    },
];
