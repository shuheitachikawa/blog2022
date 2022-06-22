import { Post } from 'src/entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status.enum';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, content, thumbnailUrl } = createPostDto;

    const post = this.create({
      title,
      content,
      thumbnailUrl,
      status: PostStatus.PUBLISHED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
    });

    await this.save(post);

    return post;
  }
}
