import { UserStatus } from '../auth/user-status.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: 'The username is required' })
  username: string;

  @Column({ unique: true })
  @IsEmail({ message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  @Exclude({ toPlainOnly: true })
  email: string;

  @Column({ comment: '可変の表示名' })
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ default: 'https://' })
  avatarUrl: string;

  @Column({ nullable: true })
  twitterUsername: string;

  @Column({ nullable: true })
  instagramUsername: string;

  @Column({ nullable: true })
  websiteUrl: string;

  @Column()
  @IsNotEmpty({ message: 'The password is required' })
  @Exclude({ toPlainOnly: true }) // passwordをuserのレスポンスから外す
  password: string;

  @Column()
  status: UserStatus;

  @Column({ nullable: true })
  gaTrackingId: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
