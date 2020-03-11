import { UserRepository } from '../../../domain/ports/user.repository';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { User } from '../../../domain/model/user';
import UserMapper from '../../mapper/user.mapper';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserPostgresRepository implements UserRepository {

    constructor( @Inject('USER_REPOSITORY')  private readonly userRepository: Repository<UserEntity> ) { }

    public async getUserById(dni: number): Promise<User> { 
        const user = await this.userRepository.findOne(dni); 
        return await UserMapper.toDomain(user) ; 
    }


    public async updateMoviesAmount(dni: number): Promise<boolean> {
        try {
            await getConnection()
                .createQueryBuilder()
                .update(UserEntity)
                .set({ amountMovies: () => "\"amountMovies\" + 1" })
                .where("dni = :dni_search", {dni_search: dni})
                .execute();
            return true
        } catch (e) {
            return false;
        };
    }


}
