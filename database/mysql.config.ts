import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Env } from 'src/config/env.config';

export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: Env.MYSQL.HOST,
  port: Env.MYSQL.PORT,
  username: Env.MYSQL.USERNAME,
  password: Env.MYSQL.PASSWORD,
  database: Env.MYSQL.DATABASE,
  autoLoadEntities: true,
  synchronize: true,
};
