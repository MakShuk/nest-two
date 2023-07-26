import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	NotFoundException,
	Header,
	Redirect,
	HostParam,
	ForbiddenException,
	UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ValidationPipe } from './pipe/validation.pipe';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	createUser(@Body() createUserDto: CatsService) {
		// Здесь мы можем быть уверены, что данные были проверены
		// и, если все в порядке, мы можем создать пользователя
		// и вернуть результат.
		return 'Пользователь успешно создан';
	}

	@Get('secret')
	getSecretData() {
		throw new ForbiddenException('Access denied to secret data');
	}

	@Get()
	getInfo(@HostParam('account') account: string) {
		return account;
	}

	@Get(':id')
	findOne(@Param() params: any): string {
		console.log(params.id);
		return `This action returns a #${params.id} cat`;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
		return this.catsService.update(id, updateCatDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		this.catsService.delete(id);
		return { message: 'Кот успешно удален' };
	}
}
