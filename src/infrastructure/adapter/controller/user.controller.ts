import { Users } from 'src/domain/model/user.entity';

import { Controller, Get, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Response } from 'express';
import { UserService } from '../../../application/caseuse/user.service';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService){}
  
/*   @Get(':dni')
  findByDni(@Res() res: Response, @Param('dni') dni: number ) {
    res.status(HttpStatus.OK).json(this.userService.findByDni({dni: dni}));
  } */

  @Get(':dni')
  findByDni(@Param('dni') dni: number ): Observable<any> {
    return of(this.userService.findByDni({dni: dni}));
  }

  @Put(':dni')
  updateAmountMovies( @Param('dni') dni: number ): Observable<any>  { 
    return of(this.userService.UpdateUser({dni: dni}));
  }

}
