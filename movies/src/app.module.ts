import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DatabaseModule } from './infrastructure/adapter/repository/db/database.module';
import { MovieController } from './infrastructure/adapter/controller/movie.controller';
import { Module, DynamicModule } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [ InfrastructureModule, ApplicationModule ]
})
export class AppModule {
  static forRoot(databaseSettings?: any): DynamicModule {
    return {
      module: AppModule,
      imports: [
        InfrastructureModule,
        ApplicationModule
      ],
      controllers: [],
      providers: [],
    }
  }
}
