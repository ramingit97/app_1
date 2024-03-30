import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { PostService } from './post/post.service';

@Injectable()
export class AppService {

  constructor(private userService:UsersService,
    private postService:PostService
    ){

  }

  async getHello(): Promise<{user:number,name:string}> {
    return await this.postService.getUser();
  }
}
