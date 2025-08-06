import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Post Title', description: 'Title of the post' })
  @MinLength(1, { message: 'Title should be more than 1 characters' })
  @MaxLength(255, { message: 'Title should be less than 255 characters' })
  @IsString({ message: 'Title should be a string' })
  @IsNotEmpty({ message: 'Title should not be empty' })
  readonly title: string;

  @ApiProperty({
    example: 'This is the content of the post...',
    description: 'Content of the post',
  })
  @MinLength(1, { message: 'Content should be more than 1 characters' })
  @MaxLength(255, { message: 'Content should be less than 255 characters' })
  @IsString({ message: 'Content should be a string' })
  readonly content: string;

  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @IsNotEmpty({ message: 'User ID should not be empty' })
  readonly userId: number;
}
