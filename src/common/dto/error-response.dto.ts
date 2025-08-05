import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({ example: ['Error message'] })
  message: string[];

  @ApiProperty({ example: 'Error type' })
  error: string;

  @ApiProperty({ example: 400 })
  statusCode: number;
}
