import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status.enum';
import { Post } from '../entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities';
import { isNotEmpty } from 'class-validator';

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

  async create(createPostDto: CreatePostDto, user: User): Promise<Post> {
    const { title, content, thumbnailUrl } = createPostDto;

    const post = this.postRepository.create({
      title,
      content,
      thumbnailUrl,
      status: PostStatus.PUBLISHED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      user,
    });

    await this.postRepository.save(post);

    return post;
  }

  async update(id: Post['id'], user: User): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    if (user.id === post.userId) {
      throw new BadRequestException('自分の商品を購入することはできません');
    }

    const updated: Post = {
      ...post,
      title: 'iiiii',
    };

    return await this.postRepository.save(updated);
  }

  async delete(id: Post['id'], user): Promise<void> {
    const post = await this.postRepository.findOne({ where: { id } });

    if (post.userId !== user.id)
      throw new BadRequestException('他人の商品を消せません');

    await this.postRepository.delete(id);
  }
}
