import { ApiProperty } from '@nestjs/swagger';

export class RecipeInformation {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  duration: number;
  @ApiProperty()
  ingredients: Array<string>;
  @ApiProperty()
  steps: Array<string>;
}
