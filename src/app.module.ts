import { UserRepository } from './domain/ports/user.repository';
import { UserService } from './application/caseuse/user.service';
import { UserController } from './infrastructure/adapter/controller/user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './infrastructure/adapter/repository/db/user.module';

@Module({
  imports: [
    UserModule, 
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "users",
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
})
export class AppModule {}
