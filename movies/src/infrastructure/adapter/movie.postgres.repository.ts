import { Injectable, Inject } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { MovieEntity } from './entity/movie.entity';
import { MovieRepository } from '../../domain/ports/movie.repository';
import { Movie } from '../../domain/model/movie';
import MovieMapper from '../mapper/movie.mapper';

@Injectable()
export class MoviePostgresRepository implements MovieRepository {

    constructor( @Inject('MOVIE_REPOSITORY')  private readonly movieRepository: Repository<MovieEntity> ) { }

    public async getMovieById(id: number): Promise<Movie> { 
        const movie = await this.movieRepository.findOne(id); 
        return MovieMapper.toDomain(movie) ; 
    }

    public async getAllMovies(): Promise<Movie[]> { 
        const movies = await this.movieRepository.find(); 
        return await MovieMapper.toDomains(movies) ; 
    }s

    public async saveMovie(movie: Movie): Promise<string> {
        try {
            await this.movieRepository.save(movie);
            return 'Creado Exitosamente'
        } catch (e) {
            return 'Error al crear usuario: '+e;
        };
    }


}
