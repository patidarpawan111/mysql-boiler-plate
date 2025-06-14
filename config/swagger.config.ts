import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('YOU APP NAME')
  .setDescription('APP DESCRIPTION')
  .setVersion('1.0')
  .build();
