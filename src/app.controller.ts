import { Controller, Get, HostParam, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('login')
	getHi() {
		return this.appService.getHi();
	}
}

//host: ':client2.local:3000'
