import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get()
  getHello(@Res({passthrough:true}) response) {
    response.cookie("ramin",true);
    return this.appService.getHello();
    // return res.status(200).send("ramin");
  }
}
