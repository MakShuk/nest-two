import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseArrayPipe,
	UsePipes,
	UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParseEnumPipe } from '@nestjs/common';
import { JoiValidationPipe } from './pipe/joiValidation.pipe';
import { CustomDecorator } from 'src/decorators/custom.decorator';
import { CustomInterceptor } from 'src/Interceptor/custom.Interceptor';
import { TimeoutInterceptor } from 'src/Interceptor/timeout.interceptor';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

enum Gender {
	MALE = 'male',
	FEMALE = 'female',
	OTHER = 'other',
}

@CustomDecorator('Class data')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	/* 	@Post()
	create(@Body(new ParseArrayPipe({ items: CreateUserDto })) createUserDto: CreateUserDto[]) {
		console.log(createUserDto);
	} */
	/* 
	@Post()
	create(@Body() createUserDto: CreateUserDto[]) {
		console.log(createUserDto);
	} */

	@Post()
	@UseInterceptors(TimeoutInterceptor)
	@CustomDecorator('metod data')
	async createUser(@Body() createUserDto: CreateUserDto) {
		// Здесь "gender" будет содержать значение, которое соответствует одному из значений перечисления Gender
		//await delay(12000);
		return createUserDto;
	}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get(':id')
	@CustomDecorator('metod data')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id);
	}

	/* @Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto);
	} */

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(+id);
	}
}
