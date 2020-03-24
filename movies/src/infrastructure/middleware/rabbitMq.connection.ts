import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

export class RabbitMqConnection {
  
  client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
          queueOptions: {
            durable: false
          },
        },
    });
  }

  

}