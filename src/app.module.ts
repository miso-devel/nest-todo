import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SamplesModule } from './samples/samples.module';

@Module({
  imports: [UsersModule, SamplesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
