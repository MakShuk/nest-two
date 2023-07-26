import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
	readonly id: number;
	readonly name: string;
	readonly age: number;
	readonly breed: string;
}
