import { CallHandler, ExecutionContext, ForbiddenException, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, catchError, map, tap, timeout,throwError } from 'rxjs';

@Injectable()
export class TimeloggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before....");

   const date = Date.now();



    
    return next
       .handle()
       .pipe(timeout(3000))
       .pipe(
        tap(()=>console.log("After.... ", Date.now()- date , ' ms') )
       ).pipe(map((data)=>({data})))
       .pipe(catchError((err)=>{
        return throwError(()=>new ForbiddenException());
       }))
  }
}
