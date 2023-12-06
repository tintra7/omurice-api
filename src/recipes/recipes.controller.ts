import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Recipe } from './entities/recipe.entity';
import { Recipes } from './entities/recipes.entity';

@ApiTags("Recipes")
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @ApiResponse({status: 200, description: "success"})
  @ApiResponse({status: 201, description: "successful create a new recipe"})
  @ApiResponse({status: 404, description: "page not found"})
  @ApiResponse({status: 405, description: "method not allowed"})
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiResponse({type: Recipes, status: 200, description: "success"})
  @ApiResponse({status: 405, description: "method not allowed"})
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':id')
  @ApiResponse({type: Recipe,status: 200, description: "success", })
  @ApiResponse({status: 405, description: "method not allowed"})
  @ApiResponse({status: 404, description: "page not found"})
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description: "success"})
  @ApiResponse({status: 405, description: "method not allowed"})
  @ApiResponse({status: 404, description: "page not found"})
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: "success"})
  @ApiResponse({status: 405, description: "method not allowed"})
  remove(@Param('id') id: string) {
    return this.recipesService.remove(+id);
  }
}
