import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
