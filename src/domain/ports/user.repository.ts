import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../model/user.entity';
import { Repository, getConnection } from 'typeorm';


@Injectable()
export class UserRepository {
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users> ) { }

    public async getUserById(dni: number): Promise<Users> {

        return this.userRepository.findOne(dni);
    }

    public async updateMoviesAmount(dni: number): Promise<boolean> {

        try {
            await getConnection()
                .createQueryBuilder()
                .update(Users)
                .set({ amountMovies: () => "amountMovies + 1" })
                .where("dni = :dni", { dni: dni })
                .execute();
            return true
        } catch (e) {
            return false;
        }

    }
}
