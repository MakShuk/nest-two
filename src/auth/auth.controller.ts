import {
	Body,
	Controller,
	Post,
	HttpCode,
	HttpStatus,
	Res,
	Req,
	UseGuards,
	Get,
	Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/decorators/custom.decorator';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() authDto: AuthDto) {
		return this.authService.signIn(authDto.username, authDto.password);
	}

	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}
}
