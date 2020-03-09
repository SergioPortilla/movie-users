import { UserPostgresRepository } from '../../infrastructure/adapter/repository/user.postgress.repository';
import { Connection } from 'typeorm';
import { User } from '../../domain/model/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION']
    },
    {
        provide: 'UserRepository',
        useClass: UserPostgresRepository,
    }
]