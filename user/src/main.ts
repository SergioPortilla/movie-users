import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

const microserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://rabbitmq:5672'],
    queue: 'user_queue',
    queueOptions: {
      durable: true
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions) ;
    app.listen(()=> {console.log('Microservice is listening')});
}
bootstrap();
