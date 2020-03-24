import { createConnection } from 'typeorm';
import { MovieEntity } from '../../entity/movie.entity';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: "postgres",
            // host: "postgresSql",
            host: "localhost",
            port: 5432,
            username: "root",
            password: "root",
            database: "movies",
            entities: [ MovieEntity ],
            synchronize: true
        }),
    },
];