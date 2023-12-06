import { ApiProperty } from "@nestjs/swagger"

export class Recipe {
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


