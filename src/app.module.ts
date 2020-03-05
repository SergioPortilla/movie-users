import { UserService } from './application/caseuse/user.service';
import { UserController } from './infrastructure/adapter/controller/user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ UserController],
  providers: [ UserService],
})
export class AppModule {}
