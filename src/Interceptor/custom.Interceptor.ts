import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
	constructor(private reflector: Reflector) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		// Получаем пользовательские метаданные, примененные к классу и методу
		const customDataClass = this.reflector.get<string>('customData', context.getClass());
		const customDataMethod = this.reflector.get<string>('customData', context.getHandler());

		console.log('Custom data for class:', customDataClass);
		console.log('Custom data for method:', customDataMethod);

		return next.handle();
	}
}
