import { Controller, Get, HttpStatus, Param, ParseIntPipe, Req, SetMetadata, UseGuards, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { RoleGuard } from 'src/role/role.guard';
import { Roles } from 'src/roles/roles.decorator';
import { TimeloggerInterceptor } from 'src/timelogger/timelogger.interceptor';
import { Request } from 'express';
import { User } from 'src/roles/user.decorator';

@UseGuards(RoleGuard)
// @Roles('admin')

@UseInterceptors(TimeloggerInterceptor)
@Controller('post')
export class PostController {

    constructor(private readonly postService:PostService){

    }

    // @SetMetadata('roles',['admin'])
    @Roles('admin')
    @Get()
    async getPost(@User('id') userId){
        console.log(userId);
        
        // const promiseRes  = ()=>{
        //     return new Promise((res,rej)=>{
        //         setTimeout(() => {
        //            res("result")
        //         }, 6000);
        //     })
        // }
        // return await promiseRes()
        return {id:1,name:"ramin"}
    }


    // @Get(":id")
    // async getPostById(@Param('id',ParseIntPipe) id:number){
    //     console.log(typeof id);
        
    //     return {res:id};
    // }

    @Get(":id")
    async getPostById(@Param('id',
    new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number){
        console.log(typeof id);
        
        return {res:id};
    }


}
