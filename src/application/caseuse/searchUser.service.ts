import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/domain/model/user.entity';
import { UserRepository } from './../../domain/ports/user.repository';

@Injectable()
export class SearchUserService {

    constructor( @Inject('UserRepository') private userRepository: UserRepository) { }

    async findByDni({ dni }): Promise<User> { return this.userRepository.getUserById(dni);  }

}
