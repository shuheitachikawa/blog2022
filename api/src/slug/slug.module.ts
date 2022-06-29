import { Module } from '@nestjs/common';
import { AuthModule } from 'auth/auth.module';
import { SlugController } from './slug.controller';

@Module({
  imports: [AuthModule],
  controllers: [SlugController],
})
export class SlugModule {}
