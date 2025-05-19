import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './core/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor, HttpExceptionFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(AppLogger));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = process.env.PORT || 3333;
  await app.listen(port);
  app.get(AppLogger).log(`🚀 Backend rodando na porta ${port}`);
}
bootstrap();
