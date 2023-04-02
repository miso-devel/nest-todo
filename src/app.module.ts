import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { BooksModule } from './books/books.module';
import { SnacksModule } from './snacks/snacks.module';

@Module({
  imports: [CatsModule, DogsModule, BooksModule, SnacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
