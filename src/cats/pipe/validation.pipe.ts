import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
	transform(value: CreateCatDto) {
		if (!value.name || !value.age || !value.breed) {
			throw new BadRequestException('Не указаны все обязательные поля');
		}

		if (value.name.length < 3) {
			throw new BadRequestException('Имя слишком короткое');
		}

		return value;
	}
}
