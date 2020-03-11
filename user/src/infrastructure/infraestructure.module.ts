import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { UserController } from './adapter/controller/user.controller';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/common/enums/transport.enum';

@Module({
  imports: [
    ApplicationModule,
    ClientsModule.register([{ 
      name: 'USER-SERVICE', 
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      },
  }])
  ],
  controllers: [UserController],
  providers: [],
  exports: []
})
export class InfraestructureModule { }
