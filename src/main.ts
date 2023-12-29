import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('message', { prefix: '/message' });
  app.setGlobalPrefix('api/');
  await app.listen(3000);
}
bootstrap();
