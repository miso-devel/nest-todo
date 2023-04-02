import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SnacksService } from './snacks.service';
import { CreateSnackInput } from './dto/create-snack.input';
import { UpdateSnackInput } from './dto/update-snack.input';

@Resolver('Snack')
export class SnacksResolver {
  constructor(private readonly snacksService: SnacksService) {}

  @Mutation('createSnack')
  create(@Args('createSnackInput') createSnackInput: CreateSnackInput) {
    return this.snacksService.create(createSnackInput);
  }

  @Query('snacks')
  findAll() {
    return this.snacksService.findAll();
  }

  @Query('snack')
  findOne(@Args('id') id: number) {
    return this.snacksService.findOne(id);
  }

  @Mutation('updateSnack')
  update(@Args('updateSnackInput') updateSnackInput: UpdateSnackInput) {
    return this.snacksService.update(updateSnackInput.id, updateSnackInput);
  }

  @Mutation('removeSnack')
  remove(@Args('id') id: number) {
    return this.snacksService.remove(id);
  }
}
