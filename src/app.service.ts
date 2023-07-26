import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return '<h1>Hello World!<h1>';
	}

	getHi(): string {
		return '<h1>Hi<h1>';
	}
}
