import { Connection } from 'typeorm';
import { MovieEntity } from '../../infrastructure/adapter/entity/movie.entity';
import { MoviePostgresRepository } from '../../infrastructure/adapter/movie.postgres.repository';

export const movieProviders = [
    {
        provide: 'MOVIE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(MovieEntity),
        inject: ['DATABASE_CONNECTION']
    },
    {
        provide: 'MovieRepository',
        useClass: MoviePostgresRepository,
    }
]