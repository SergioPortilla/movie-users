import { MovieEntity } from '../adapter/entity/movie.entity';
import { Movie } from '../../domain/model/movie';

export default class MovieMapper {
    public static async toDomain(movieEntity : MovieEntity): Promise<Movie> {
        return new Movie(
            movieEntity.id,
            movieEntity.title,
            movieEntity.synopsis,
        );
    }

    public static async toDomains(movieEntities: MovieEntity[]): Promise<Movie[]> {
        const movies = new Array<Movie>();
        movieEntities.forEach(async movieEntity => {
          const movie = await this.toDomain(movieEntity);
          movies.push(movie);
        });
        return movies;
      }

}