import { createConnection } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "root",
            password: "root",
            database: "users",
            entities: [ UserEntity ],
            synchronize: true
        }),
    },
];