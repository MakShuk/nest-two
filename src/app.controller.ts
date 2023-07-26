import { Controller, Get, HostParam, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ host: ':client1.local', path: '/' })
export class AppController {
	constructor(private readonly appService: AppService) {}
	@Get()
	getInfo(@HostParam('client1') client1: string) {
		return client1;
	}

	@Get('login')
	getHi() {
		return this.appService.getHi();
	}
}

//host: ':client2.local:3000'
