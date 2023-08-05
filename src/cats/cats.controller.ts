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
	ParseIntPipe,
	ParseBoolPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ValidationPipe } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { MyLoggerValidationPipe } from './pipe/loger.pipe';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Post()
	createUser(@Body() createUserDto: CreateCatDto) {
		// Здесь мы можем быть уверены, что данные были проверены
		// и, если все в порядке, мы можем создать пользователя
		// и вернуть результат.
		return createUserDto;
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
	findOne(@Param('id', MyLoggerValidationPipe) id: number) {
		// Теперь переменная id содержит значение, преобразованное в целое число
		// Если значение параметра :id не является целым числом, пайп сгенерирует ошибку.
		return `User with ID: ${typeof id}`;
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
