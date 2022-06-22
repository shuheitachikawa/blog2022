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

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findById(id: Post['id']): Promise<Post> {
    const found = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    if (!found) throw new NotFoundException();

    return found;
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const { title, content, thumbnailUrl } = createPostDto;

    const post = this.postRepository.create({
      title,
      content,
      thumbnailUrl,
      status: PostStatus.PUBLISHED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
    });

    await this.postRepository.save(post);

    return post;
  }

  async update(id: Post['id']): Promise<Post> {
    const item = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    const updated: Post = {
      ...item,
      title: 'iiiii'
    }

    return await this.postRepository.save(updated);
  }

  async delete(id: Post['id']): Promise<void> {
    await this.postRepository.delete(id);
  }
}
