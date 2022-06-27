import { UserStatus } from '../auth/user-status.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true }) // passwordをuserのレスポンスから外す
  password: string;

  @Column()
  status: UserStatus;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
