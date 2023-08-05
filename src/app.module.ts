import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { NotFoundExceptionFilter } from './exception/not-found.exception';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: NotFoundExceptionFilter,
		},
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
	imports: [CatsModule, UserModule, AuthModule, UsersModule],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('cats');
	}
}
