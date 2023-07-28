import Joi from 'joi';

export const createUserSchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
	age: Joi.number(),
	breed: Joi.string(),
});

export class CreateUserDto {
	name: string;
	age: number;
	breed: string;
}
