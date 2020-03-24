import { Module } from '@nestjs/common';
import { CreateMovieService } from './caseuse/createMovie.service';
import { SearchMovieService } from './caseuse/searchMovie.service';
import { movieProviders } from './providers/movie';
import { DatabaseModule } from '../infrastructure/adapter/repository/db/database.module';
import { UpdateUserService } from './caseuse/messages.service';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [],
    providers: [
        CreateMovieService,
        SearchMovieService,
        UpdateUserService,
        ...movieProviders
    ],
    exports: [
        CreateMovieService,
        SearchMovieService,
        UpdateUserService,
        ...movieProviders
    ]
})
export class ApplicationModule {}
