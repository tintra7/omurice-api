import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    phone: string
    @ApiProperty()
    password: string
}
