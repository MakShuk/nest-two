import { SetMetadata } from '@nestjs/common';

export const CustomDecorator = (data: string) => SetMetadata('customData', data);
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
