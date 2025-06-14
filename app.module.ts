import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './database/mysql.config';

@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig)],
})
export class AppModule {}
