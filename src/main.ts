import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import * as cookieParser from 'cookie-parser';
import { LoggerMiddleware } from './logger/logger.middleware';
import { logger } from './logger/logger.midd';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
