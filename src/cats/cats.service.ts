import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
	private cats: any[] = [
		{
			id: 1,
			name: 'biе3',
			age: 30,
			breed: 'dwq',
		},
	]; // Замените any на вашу модель данных кота

	create(catData: CreateCatDto) {
		const newCat = {
			id: this.cats.length + 1, // Просто для примера, обычно лучше использовать uuid
			...catData,
		};
		this.cats.push(newCat);
		return newCat;
	}

	findAll() {
		return this.cats;
	}

	findById(id: string) {
		const cat = this.cats.find(cat => cat.id === Number(id));
		if (!cat) {
			throw new NotFoundException('Кот не найден');
		}
		return cat;
	}

	update(id: string, catData: UpdateCatDto) {
		const cat = this.findById(id);

		// Применяем обновления из catData
		Object.assign(cat, catData);

		return cat;
	}

	delete(id: string) {
		const index = this.cats.findIndex(cat => cat.id === Number(id));
		if (index === -1) {
			throw new NotFoundException('Кот не найден');
		}
		this.cats.splice(index, 1);
	}
}
