import { User } from '../../domain/model/user';
import { UserEntity } from '../adapter/entity/user.entity';

export default class UserMapper {
    public static async toDomain(userEntity : UserEntity): Promise<User> {
        return new User(
            userEntity.dni,
            userEntity.name,
            userEntity.lastName,
            userEntity.amountMovies,
        );
    }

}