import { IsString, IsEmail, IsNotEmpty, IsNumber, Length, MinLength, IsIn } from 'class-validator';

export class CreateCatDto {
	readonly id: number;

	@IsString()
	@MinLength(3, {
		message: 'Title is too short',
	})
	@IsNotEmpty()
	readonly name: string;

	@IsNumber()
	@IsNotEmpty()
	readonly age: number;

	@IsString()
	@IsNotEmpty()
	@IsIn(['apple', 'orange', 'banana'])
	readonly breed: string;
}
