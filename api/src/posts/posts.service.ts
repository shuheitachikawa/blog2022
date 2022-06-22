import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status.enum';
import { Post } from '../entities/post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  private posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  findById(id: Post['id']): Post {
    const found = this.posts.find((post) => post.id === id);

    if (!found) throw new NotFoundException();

    return found;
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postRepository.createPost(createPostDto);
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
