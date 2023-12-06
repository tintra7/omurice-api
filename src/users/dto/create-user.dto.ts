import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
