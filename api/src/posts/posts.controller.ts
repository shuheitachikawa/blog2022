import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostEntity } from '../entities/post.entity';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { GetUser } from 'auth/decorator/get-user.decorator';
import { User } from 'entities';
import { UserStatus } from 'auth/user-status.enum';
import { Role } from 'auth/decorator/role.decorator';
import { RolesGuard } from 'auth/guards/roles.guard';

@Controller('posts')
@UseInterceptors(ClassSerializerInterceptor) // レスポンスを返す前に、usr.entityのpasswordを返却から除く
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return await this.postsService.findAll();
  }

  @Get(':id') // :をつけることでnestが可変パラメータと認識する
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<PostEntity> {
    return await this.postsService.findById(id);
  }

  @Post()
  @Role(UserStatus.PREMIUM)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(
    @Body(ValidationPipe) createPostDto: CreatePostDto,
    @GetUser() user: User,
  ): Promise<PostEntity> {
    return await this.postsService.create(createPostDto, user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<PostEntity> {
    return await this.postsService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<void> {
    return this.postsService.delete(id, user);
  }
}
