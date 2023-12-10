import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiMethodNotAllowedResponse,
  ApiTags,
  ApiConsumes,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { RecipeInformation } from './entities/recipe.entity';
import { Recipes } from './entities/recipes.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ description: 'Created Successfully' })
  @ApiNotFoundResponse({ description: 'Page Not Found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiMethodNotAllowedResponse({ description: 'Method Not Allowed' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiOkResponse({ type: Recipes, description: 'Success' })
  @ApiNotFoundResponse({ description: 'Page Not Found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiMethodNotAllowedResponse({ description: 'Method Not Allowed' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: RecipeInformation, description: 'Success' })
  @ApiNotFoundResponse({ description: 'Page Not Found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiMethodNotAllowedResponse({ description: 'Method Not Allowed' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Page Not Found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiMethodNotAllowedResponse({ description: 'Method Not Allowed' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Page Not Found' })
  @ApiMethodNotAllowedResponse({ description: 'Method Not Allowed' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
