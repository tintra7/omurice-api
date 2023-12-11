/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  findAll() {
    return [
      new CreateRecipeDto(
        '6576d5e8c99fd45c856667d7',
        'Steamed Pork Belly Dumplings with Brown Butter (Manti)',
        'If you have around 45 minutes to spend in the kitchen, Square Deviled Eggs might be an outstanding gluten free and primal recipe to try. One serving contains 212 calories, 19g of protein, and 15g of fat',
        'https://storage.googleapis.com/file_storage_exampe/Green-Vegetables-Names-in-English-for-Kids.jpg',
        60,
        ['fork', 'egg', 'oil'],
        [
          "To make square hard boiled eggs, you'll need an Egg cuber or Square Egg Press",
          'First boil your eggs, then slide the egg inside the press and screw the top down so it pushes the egg into the corners.',
          'Let the egg cool and remove it from the mold. For better results use medium size eggs.',
        ],
        '6576d9abc99fd45c856667d8123',
      ),
    ];
  }

  findOne(id: number) {
    return new CreateRecipeDto(
      '6576d5e8c99fd45c856667d7',
      'Steamed Pork Belly Dumplings with Brown Butter (Manti)',
      'If you have around 45 minutes to spend in the kitchen, Square Deviled Eggs might be an outstanding gluten free and primal recipe to try. One serving contains 212 calories, 19g of protein, and 15g of fat',
      'https://storage.googleapis.com/file_storage_exampe/Green-Vegetables-Names-in-English-for-Kids.jpg',
      60,
      ['fork', 'egg', 'oil'],
      [
        "To make square hard boiled eggs, you'll need an Egg cuber or Square Egg Press",
        'First boil your eggs, then slide the egg inside the press and screw the top down so it pushes the egg into the corners.',
        'Let the egg cool and remove it from the mold. For better results use medium size eggs.',
      ],
      '6576d9abc99fd45c856667d8123',
    );
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
