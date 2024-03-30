import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { LoggerMiddleware } from 'src/logger/logger.middleware';


@Global()
@Module({
  controllers: [PostController],
  providers: [PostService],
  exports:[PostService]
})
export class PostModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware)
      // .forRoutes('post');
      // .forRoutes({path:'post',method:RequestMethod.POST});
      // .forRoutes(PostController);
  }
    
}
