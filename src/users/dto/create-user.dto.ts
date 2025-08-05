import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Email address' })
  @IsString({ message: 'Email should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsString({ message: 'Password Should be a string' })
  @Length(4, 16, { message: 'Password should be between 4 and 16 characters' })
  readonly password: string;
}
