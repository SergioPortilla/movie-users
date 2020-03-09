import { User } from '../model/user.entity';

export interface UserRepository {

    getUserById(dni: Number): Promise<User>;

    updateMoviesAmount(dni: number): Promise<boolean>;

}
