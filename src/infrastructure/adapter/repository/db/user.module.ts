import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../../../domain/model/user.entity';
import { UserService } from '../../../../application/caseuse/user.service';
import { UserController } from '../../controller/user.controller';
import { UserRepository } from '../../../../domain/ports/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [ UserService ],
    controllers: [ UserController ],
  })
export class UserModule {}
