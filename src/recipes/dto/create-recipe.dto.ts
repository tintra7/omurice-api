import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  constructor(
    id: string,
    name: string,
    description: string,
    image: string,
    duration: number,
    ingredients: Array<string>,
    steps: Array<string>,
    userId: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.userId = userId;
  }
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
  @ApiProperty()
  duration: number;
  @ApiProperty()
  ingredients: Array<string>;
  @ApiProperty()
  steps: Array<string>;
  @ApiProperty()
  userId: string;
}
