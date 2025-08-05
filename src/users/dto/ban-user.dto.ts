import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  readonly userId: number;
  @ApiProperty({
    example: 'For hooliganism',
    description: 'Ban reason',
  })
  readonly banReason: string;
}
