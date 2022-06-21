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
import { Post as PostModel } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostModel[] {
    return this.postsService.findAll();
  }

  @Get(':id') // :をつけることでnestが可変パラメータと認識する
  findById(@Param('id', ParseUUIDPipe) id: string): PostModel {
    return this.postsService.findById(id);
  }

  @Post()
  create(@Body(ValidationPipe) createPostDto: CreatePostDto): PostModel {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): PostModel {
    return this.postsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    return this.postsService.delete(id);
  }
}
