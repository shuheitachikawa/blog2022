import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostEntity } from '../entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostEntity[] {
    return this.postsService.findAll();
  }

  @Get(':id') // :をつけることでnestが可変パラメータと認識する
  findById(@Param('id', ParseUUIDPipe) id: string): PostEntity {
    return this.postsService.findById(id);
  }

  @Post()
  async create(
    @Body(ValidationPipe) createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return await this.postsService.create(createPostDto);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): PostEntity {
    return this.postsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.postsService.delete(id);
  }
}
