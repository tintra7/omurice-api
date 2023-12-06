import { ApiProperty, OmitType } from '@nestjs/swagger';
import { RecipeInformation } from './recipe.entity';

class Recipe extends OmitType(RecipeInformation, [
  'steps',
  'ingredients',
] as const) {}

export class Recipes {
  @ApiProperty({ type: [Recipe] })
  result: Recipe[];
}
