import { Controller } from '@nestjs/common';
import { SamplesService } from './samples.service';

@Controller('samples')
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}
}
