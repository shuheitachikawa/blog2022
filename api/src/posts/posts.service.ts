import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status.enum';
import { Post } from '../entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

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
    const { title, content, thumbnailUrl } = createPostDto;

    const post = await this.postRepository.save({
      title,
      content,
      thumbnailUrl,
      status: PostStatus.PUBLISHED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
    });

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
