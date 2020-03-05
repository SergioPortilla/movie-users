import { User } from 'src/domain/model/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    findByDni({dni}){
        return  new User(dni, 'nombre', 'apellido', 1);
    }

    UpdateUser() {
        return '';
    }
}
