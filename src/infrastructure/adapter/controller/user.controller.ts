import { User } from '../../../domain/model/user.entity';
import { Controller, Get, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { SearchUserService } from '../../../application/caseuse/searchUser.service';
import { UpdateUserService } from '../../../application/caseuse/updateuser.service';


@Controller()
export class UserController {
  constructor(
    private readonly searchUserService: SearchUserService,
    private readonly updateUserService: UpdateUserService
  ) { }

  /*   @Get(':dni')
    findByDni(@Res() res: Response, @Param('dni') dni: number ) {
      res.status(HttpStatus.OK).json(this.userService.findByDni({dni: dni}));
    } */

  @Get(':dni')
  findByDni(@Param('dni') dni: number): Promise<User> {
    return this.searchUserService.findByDni({ dni: dni });
  }

  @Put(':dni')
  updateAmountMovies(@Param('dni') dni: number): Promise<boolean> {
    return this.updateUserService.UpdateAmountMovies({ dni: dni });
  }

}
