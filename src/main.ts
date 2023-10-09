import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      forbidNonWhitelisted: true,
      skipNullProperties: true,
    }),
  );
  await app.listen(3000);
}

bootstrap().then(() => {
  console.log('start');
});
