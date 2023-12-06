import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  phone: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  bio: string;
  @ApiProperty()
  name: string;
}
