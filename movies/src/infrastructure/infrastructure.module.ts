import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { MovieController } from './adapter/controller/movie.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [MovieController],
    providers: [ ],
})
export class InfrastructureModule {}
