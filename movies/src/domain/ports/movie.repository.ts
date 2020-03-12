import { Movie } from './../model/movie';

export interface MovieRepository {

    getMovieById(dni: Number): Promise<Movie>;

    getAllMovies(): Promise<Movie[]>;

    saveMovie(movie: Movie): Promise<string>;

}