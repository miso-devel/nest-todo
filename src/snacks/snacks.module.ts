import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { SnacksResolver } from './snacks.resolver';

@Module({
  providers: [SnacksResolver, SnacksService]
})
export class SnacksModule {}
