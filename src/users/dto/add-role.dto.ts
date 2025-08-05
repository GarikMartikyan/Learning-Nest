import { IsNumber, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @IsNumber()
  @Min(1)
  readonly userId: number;

  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  @IsString()
  @Min(3)
  @Max(20)
  readonly value: string;
}
