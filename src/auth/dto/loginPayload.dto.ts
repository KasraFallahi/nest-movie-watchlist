import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginPayloadDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
