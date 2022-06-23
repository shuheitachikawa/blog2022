import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from 'posts/posts.module';
import { ormconfig } from './config/ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AuthModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
