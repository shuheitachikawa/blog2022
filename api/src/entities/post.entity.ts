import { PostStatus } from 'src/posts/post-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
