import { config } from 'dotenv';
config();

const getVar = (name: string) => {
  const _var = process.env[name];
  if (!_var) throw new Error(`Unable to locate env. variable: ${name}`);
  return _var;
};

export const Env = {
  PORT: parseInt(getVar('PORT')),
  MYSQL: {
    HOST: getVar('MYSQL_HOST'),
    PORT: parseInt(getVar('MYSQL_PORT')),
    USERNAME: getVar('MYSQL_USERNAME'),
    PASSWORD: getVar('MYSQL_PASSWORD'),
    DATABASE: getVar('MYSQL_DATABASE'),
  },
  SWAGGER: {
    SWAGGER_USER: getVar('SWAGGER_USER'),
    SWAGGER_PASSWORD: getVar('SWAGGER_PASSWORD'),
  },
};
