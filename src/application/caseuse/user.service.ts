
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../domain/model/user.entity';
import { UserRepository } from '../../domain/ports/user.repository';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class UserService {

    constructor(  @InjectRepository(Users) private userRepository: Repository<Users>) { }

    async findByDni({ dni }): Promise<Users> { return this.userRepository.findOne(dni);  }

    async UpdateUser({ dni }): Promise<boolean> {
        console.log(dni);
        try {
            await getConnection()
                .createQueryBuilder()
                .update(Users)
                .set({ amountMovies: () => "\"amountMovies\" + 1" })
                .where("dni = :dni_search", {dni_search: dni})
                .execute();
            return true
        } catch (e) {
            return false;
        };
    }
}
