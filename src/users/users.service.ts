/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      new CreateUserDto(
        '6576d5e8c99fd45c856667d7',
        'Faker',
        '0384202392',
        'TrungNghia0',
        'My bio is 99% loaded.',
        '6576d9abc99fd45c856667d8123',
      ),
    ];
  }

  findOne(id: number) {
    return new CreateUserDto(
      '6576d5e8c99fd45c856667d7',
      'Faker',
      '0384202392',
      'TrungNghia0',
      'My bio is 99% loaded.',
      '6576d9abc99fd45c856667d8123',
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
