/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from './config/env.config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger.config';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { ErrorInterceptor } from './common/interceptor/error.interceptor';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global pipes & interceptors
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ResponseInterceptor(), new ErrorInterceptor());

  app.use(
    ['/docs', '/docs-json'],
    basicAuth({
      challenge: true,
      users: {
        [Env.SWAGGER.SWAGGER_USER]: Env.SWAGGER.SWAGGER_PASSWORD,
      },
    }),
  );

  // Swagger setup
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(Env.PORT);
  console.log(`Server running on http://localhost:${Env.PORT}`);
  console.log(`Swagger docs available at /docs`);
}
bootstrap().catch((err) => {
  console.error('Error during app bootstrap:', err);
});
