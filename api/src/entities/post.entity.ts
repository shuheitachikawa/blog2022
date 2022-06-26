import { PostStatus } from '../posts/post-status.enum';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ comment: 'タイトル' })
  title: string;

  @Column({ comment: '本文' })
  content: string;

  @Column({ comment: 'ステータス' })
  status: PostStatus;

  @Column({ comment: 'サムネイルURL' })
  thumbnailUrl: string;

  @Column({ comment: '作成日' })
  createdAt: string;

  @Column({ comment: '更新日' })
  updatedAt: string;

  @Column({ comment: '公開日' })
  publishedAt: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column()
  userId: string;
}
