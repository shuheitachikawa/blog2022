import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status.enum';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  findById(id: Post['id']): Post {
    const found = this.posts.find((post) => post.id === id);

    if (!found) throw new NotFoundException();

    return found;
  }

  create(createPostDto: CreatePostDto): Post {
    const post: Post = {
      ...createPostDto,
      id: uuid(),
      status: PostStatus.PUBLISHED,
    };

    this.posts.push(post);

    return post;
  }

  updateStatus(id: Post['id']): Post {
    const item = this.posts.find((post) => post.id === id);
    item.status = PostStatus.DRAFT;

    return item;
  }

  delete(id: Post['id']): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
