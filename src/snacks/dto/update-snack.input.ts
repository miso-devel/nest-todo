import { CreateSnackInput } from './create-snack.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSnackInput extends PartialType(CreateSnackInput) {
  id: number;
}
