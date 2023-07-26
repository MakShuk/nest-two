import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HostMiddleware implements NestMiddleware {
	use(req: any, res: Response, next: Function) {
		const hostname = req.hostname; // Получаем имя хоста из запроса
		const parts = hostname.split('.'); // Разделяем хост на сегменты

		// Ваш код для обработки параметров хоста
		// Например, вы можете определить идентификатор клиента
		// на основе части хоста или других параметров.

		// Пример: Предполагаем, что идентификатор клиента находится в первом сегменте хоста
		const clientId = parts[0];

		// Сохраняем параметр хоста в свойстве req, чтобы его можно было использовать в контроллерах
		req.clientId = clientId;

		next();
	}
}
