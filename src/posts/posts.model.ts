import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  imagePath: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 'Post Title', description: 'Title of the post' })
  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @ApiProperty({
    example: 'This is the content of the post...',
    description: 'Content of the post',
  })
  @Column({ type: DataType.TEXT })
  declare content: string;

  @ApiProperty({
    example: '/uploads/images/post1.jpg',
    description: 'Path to the post image',
  })
  @Column({ type: DataType.STRING })
  declare imagePath: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @BelongsTo(() => User)
  declare author: User;
}
