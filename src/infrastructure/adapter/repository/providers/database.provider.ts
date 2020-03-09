import { createConnection } from 'typeorm';
import { User } from '../../../../domain/model/user.entity';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "root",
            database: "users",
            entities: [ User ],
            synchronize: true
        }),
    },
];