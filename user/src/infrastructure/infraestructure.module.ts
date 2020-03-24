import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { UserController } from './adapter/controller/user.controller';

@Module({
  imports: [ ApplicationModule ],
  controllers: [ UserController ],
  providers: [],
  exports: []
})
export class InfraestructureModule { }
