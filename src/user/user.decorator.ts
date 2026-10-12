import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const user = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log('thiss is custom decorator data =>>> ', data);
    
    const request = ctx.switchToHttp().getRequest();
    return data
  },
);