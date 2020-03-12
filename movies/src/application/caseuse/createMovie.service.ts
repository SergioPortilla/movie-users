import { Injectable, Inject } from '@nestjs/common';
import { MovieRepository } from '../../domain/ports/movie.repository';
import { Movie } from '../../domain/model/movie';

@Injectable()
export class CreateMovieService {
    
    constructor( @Inject('MovieRepository') private movieRepository : MovieRepository){};

    async saveMovie({ movie }): Promise<string> { return this.movieRepository.saveMovie(movie); }

}
