import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  readonly userId: number;
  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  readonly value: string;
}
