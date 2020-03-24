import { Injectable, Inject } from '@nestjs/common';
import { RabbitMqConnection } from '../../infrastructure/middleware/rabbitMq.connection';

@Injectable()
export class UpdateUserService {

    constructor( @Inject('RabbitMessage') private rabbitConnection : RabbitMqConnection){};

    public updateUser(data: number) { return this.rabbitConnection.client.send<boolean, number>('notifications', data); }
}
