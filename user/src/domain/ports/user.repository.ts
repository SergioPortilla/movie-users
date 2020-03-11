import { User } from '../model/user';

export interface UserRepository {

    getUserById(dni: Number): Promise<User>;

    updateMoviesAmount(dni: number): Promise<boolean>;

}
