import { Injectable } from '@nestjs/common';
import { CreateSnackInput } from './dto/create-snack.input';
import { UpdateSnackInput } from './dto/update-snack.input';

@Injectable()
export class SnacksService {
  create(createSnackInput: CreateSnackInput) {
    return 'This action adds a new snack';
  }

  findAll() {
    return `This action returns all snacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} snack`;
  }

  update(id: number, updateSnackInput: UpdateSnackInput) {
    return `This action updates a #${id} snack`;
  }

  remove(id: number) {
    return `This action removes a #${id} snack`;
  }
}
