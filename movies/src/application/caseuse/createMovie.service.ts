import { Injectable, Inject } from '@nestjs/common';
import { MovieRepository } from '../../domain/ports/movie.repository';
import { UpdateUserService } from './messages.service';

@Injectable()
export class CreateMovieService {
    
    constructor( 
        @Inject('MovieRepository') private movieRepository : MovieRepository,
        private readonly updateUserService : UpdateUserService
    ){};

    async saveMovie({ movie }): Promise<string> {
        if(this.updateUserService.updateUser(movie.dni)){
            return this.movieRepository.saveMovie(movie.movie);
        } 
    }

}
