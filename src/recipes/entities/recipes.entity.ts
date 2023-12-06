import { ApiProperty, OmitType } from "@nestjs/swagger"
import { Recipe } from "./recipe.entity"

class RecipeTemp extends OmitType(Recipe, ['steps', 'ingredients'] as const) {}

export class Recipes {
    @ApiProperty({type: [RecipeTemp]})
    result: RecipeTemp[]
}