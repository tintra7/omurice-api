import { ApiParam, ApiProperty } from "@nestjs/swagger";
import internal from "stream";


export class CreateRecipeDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    image: string
    @ApiProperty()
    duration: number
    @ApiProperty()
    ingredients: Array<string>
    @ApiProperty()
    steps: Array<string>
}

