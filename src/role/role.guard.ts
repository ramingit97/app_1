import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private reflector:Reflector){

  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const roles = this.reflector.get<string[]>('roles', context.getClass()) // dla classa
    // const roles = this.reflector.get<string[]>('roles', context.getHandler())
    // console.log(roles);
    console.log('middleware');
    let req = context.switchToHttp().getRequest()
    req.user = {
      name:"Ramin",
      id:1
    }

    
    return true;
  }
}
