import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'entities';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUerDto: CreateUserDto): Promise<User> {
    return await this.authService.signUp(createUerDto);
  }
}
