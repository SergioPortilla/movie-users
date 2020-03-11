import { UserPostgresRepository } from '../../infrastructure/adapter/repository/user.postgres.repository';
import { Connection } from 'typeorm';
import { UserEntity } from '../../infrastructure/adapter/entity/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(UserEntity),
        inject: ['DATABASE_CONNECTION']
    },
    {
        provide: 'UserRepository',
        useClass: UserPostgresRepository,
    }
]