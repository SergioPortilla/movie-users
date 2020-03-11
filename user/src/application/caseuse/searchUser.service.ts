import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './../../domain/ports/user.repository';
import { User } from '../../domain/model/user';

@Injectable()
export class SearchUserService {

    constructor( @Inject('UserRepository') private userRepository: UserRepository) { }

    async findByDni({ dni }): Promise<User> { return this.userRepository.getUserById(dni);  }

}
