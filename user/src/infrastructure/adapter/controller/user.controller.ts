import { User } from '../../../domain/model/user';
import { Controller, Get, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { SearchUserService } from '../../../application/caseuse/searchUser.service';
import { UpdateUserService } from '../../../application/caseuse/updateuser.service';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';


@Controller()
export class UserController {
  constructor(
    private readonly searchUserService : SearchUserService,
    private readonly updateUserService : UpdateUserService
  ) { }

  /*   @Get(':dni')
    findByDni(@Res() res: Response, @Param('dni') dni: number ) {
      res.status(HttpStatus.OK).json(this.userService.findByDni({dni: dni}));
    } */

  @Get(':dni')
  findByDni(@Param('dni') dni: number): Promise<User> {
    return this.searchUserService.findByDni({ dni: dni });
  }

  @EventPattern('notifications')
  updateAmountMovies(@Payload()  dni: number): Promise<boolean>  {
    return this.updateUserService.UpdateAmountMovies({ dni: dni });
  }

}
