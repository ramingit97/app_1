import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

    async getUser(){
        // throw new HttpException({ramin:"forbidden"},HttpStatus.FORBIDDEN);
        return {user:2,name:"Service"};
    }

}
