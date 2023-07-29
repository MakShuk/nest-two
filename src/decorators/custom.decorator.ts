import { SetMetadata } from '@nestjs/common';

export const CustomDecorator = (data: string) => SetMetadata('customData', data);
