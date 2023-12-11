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
    const user = new CreateUserDto(
      '6576d5e8c99fd45c856667d7',
      'Faker',
      '0384202392',
      'TrungNghia0',
      'My bio is 99% loaded.',
      'https://storage.googleapis.com/file_storage_exampe/Green-Vegetables-Names-in-English-for-Kids.jpg',
    );
    const { password, ...newUser } = user;
    return [newUser];
  }

  findOne(id: number) {
    const user = new CreateUserDto(
      '6576d5e8c99fd45c856667d7',
      'Faker',
      '0384202392',
      'TrungNghia0',
      'My bio is 99% loaded.',
      'https://storage.googleapis.com/file_storage_exampe/Green-Vegetables-Names-in-English-for-Kids.jpg',
    );
    const { password, ...newUser } = user;
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
