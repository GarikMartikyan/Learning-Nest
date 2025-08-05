import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @IsNumber({}, { message: 'User ID should be a number' })
  readonly userId: number;

  @ApiProperty({
    example: 'For hooliganism',
    description: 'Ban reason',
  })
  @IsString({ message: 'Ban reason should be a string' })
  @MinLength(1, { message: 'Password should be more than 1 characters' })
  @MaxLength(255, { message: 'Password should be less than 255 characters' })
  readonly banReason: string;
}
