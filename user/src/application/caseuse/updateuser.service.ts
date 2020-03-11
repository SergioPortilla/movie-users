import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './../../domain/ports/user.repository';

@Injectable()
export class UpdateUserService {

    constructor( @Inject('UserRepository') private userRepository: UserRepository) { }

    UpdateAmountMovies({ dni }) { return this.userRepository.updateMoviesAmount(dni); }

}
