import { ApplicationModule } from './application/application.module';
import { Module } from '@nestjs/common';
import { InfraestructureModule } from './infrastructure/infraestructure.module';

@Module({
  imports: [ InfraestructureModule, ApplicationModule, ],
})
export class AppModule {}