/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse();
    return next.handle().pipe(
      map((data) => ({
        isSuccess: res.statusCode >= 200 && res.statusCode < 300,
        statusCode: res.statusCode,
        error: '',
        message: data?.message || '',
        data: data?.statusCode ? { ...data, statusCode: undefined } : data,
      })),
    );
  }
}
