import { Injectable, PipeTransform, ArgumentMetadata, Logger } from '@nestjs/common';

@Injectable()
export class MyLoggerValidationPipe implements PipeTransform {
	private readonly logger = new Logger(MyLoggerValidationPipe.name);

	transform(value: any, metadata: ArgumentMetadata) {
		this.logger.log(`Incoming request data: ${JSON.stringify(value)}`);
		return value;
	}
}
