import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';

@Controller('slug')
// @UseGuards(JwtAuthGuard)
export class SlugController {
  @Get()
  getSlug() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let slug = '';
    for (var i = 0; i < 14; i++) {
      slug += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return { slug };
  }
}
