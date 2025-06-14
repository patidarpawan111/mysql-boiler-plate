/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { catchError, throwError } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    // const ctx = context.switchToHttp();
    // const res: Response = ctx.getResponse<Response>();

    return next.handle().pipe(
      catchError((err) =>
        throwError(() => ({
          isSuccess: false,
          statusCode: err?.status || 500,
          error: err?.message || 'Internal server error',
          message: err?.message || 'Something went wrong',
          data: {},
        })),
      ),
    );
  }
}
