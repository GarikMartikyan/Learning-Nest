import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Email address' })
  @IsString({ message: 'Email should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  @MaxLength(255, { message: 'Email should be less than 255 characters' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @IsString({ message: 'Password should be a string' })
  @MinLength(4, { message: 'Password should be more than 4 characters' })
  @MaxLength(16, { message: 'Password should be less than 16 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/, {
    message:
      'Password should contain at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  readonly password: string;
}
