import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  constructor(
    id: string,
    name: string,
    phone: string,
    password: string,
    bio: string,
    avatar: string,
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.bio = bio;
    this.avatar = avatar;
  }
  @ApiProperty()
  id: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  bio?: string;
  @ApiProperty()
  name?: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  avatar?: string;
}
