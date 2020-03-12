import { Injectable, Inject } from '@nestjs/common';
import { Movie } from '../../domain/model/movie';
import { MovieRepository } from '../../domain/ports/movie.repository';

@Injectable()
export class SearchMovieService {

    constructor( @Inject('MovieRepository') private movieRepository : MovieRepository) { }

    async findById({ id }): Promise<Movie> { return this.movieRepository.getMovieById(id) }

    async getAllMovies(): Promise<Movie[]> { return this.movieRepository.getAllMovies() }
}