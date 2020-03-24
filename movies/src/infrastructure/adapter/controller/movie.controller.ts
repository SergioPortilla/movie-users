import { Controller, Param, Get, Body, Post } from '@nestjs/common';
import { CreateMovieService } from '../../../application/caseuse/createMovie.service';
import { SearchMovieService } from '../../../application/caseuse/searchMovie.service';
import { Movie } from '../../../domain/model/movie';
import { MovieDto } from '../../../application/dto/movie.dto';
import { Observable } from 'rxjs';
import { UpdateUserService } from '../../../application/caseuse/messages.service';

@Controller()
export class MovieController {
    constructor(
        private readonly createMovieService : CreateMovieService,
        private readonly searchMovieService : SearchMovieService,
    ) { }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Movie> {
        return this.searchMovieService.findById({id : id});
    }

    @Get()
    getAllMovies(): Promise<Movie[]> {
        return this.searchMovieService.getAllMovies()
    }
    
    @Post()
    saveMovie(@Body() movieDto: MovieDto): Promise<string> {
        return this.createMovieService.saveMovie({movie: movieDto});
    }

}
