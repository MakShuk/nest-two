import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthorizationGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		// Ваша логика проверки авторизации здесь
		return true; // Верните true, если доступ разрешен, или false, если доступ запрещен
	}
}
