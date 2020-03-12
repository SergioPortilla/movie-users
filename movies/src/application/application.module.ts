import { Module } from '@nestjs/common';
import { CreateMovieService } from './caseuse/createMovie.service';
import { SearchMovieService } from './caseuse/searchMovie.service';
import { movieProviders } from './providers/movie';
import { DatabaseModule } from '../infrastructure/adapter/repository/db/database.module';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [],
    providers: [
        CreateMovieService,
        SearchMovieService,
        ...movieProviders
    ],
    exports: [
        CreateMovieService,
        SearchMovieService,
        ...movieProviders
    ]
})
export class ApplicationModule {}
