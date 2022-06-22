import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from 'src/posts/posts.module';
const ormConfig = require('../ormconfig');

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
