import { Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';

@Injectable()
export class UsersService {

    constructor(private postService:PostService){
        
    }

    async getUser(){
        return {user:1,name:"Ramin"};
    }

}
