import { UserRepository } from './../../../domain/ports/user.repository';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../domain/model/user.entity';

@Injectable()
export class UserPostgresRepository implements UserRepository {

    constructor( @Inject('USER_REPOSITORY')  private readonly userRepository: Repository<User> ) { }

    public async getUserById(dni: number): Promise<User> { return this.userRepository.findOne(dni); }

    public async updateMoviesAmount(dni: number): Promise<boolean> {
        console.log(dni);
        try {
            await getConnection()
                .createQueryBuilder()
                .update(User)
                .set({ amountMovies: () => "\"amountMovies\" + 1" })
                .where("dni = :dni_search", {dni_search: dni})
                .execute();
            return true
        } catch (e) {
            return false;
        };
    }


}
