import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundExceptionFilter } from './exception/not-found.exception';

@Module({
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: NotFoundExceptionFilter,
		},
	],
	imports: [CatsModule],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('cats');
	}
}
