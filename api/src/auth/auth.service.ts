import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDto } from './dto/credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      username,
      password: hashPassword,
      status,
    });

    await this.userRepository.save(user);

    return user;
  }

  /**
   * @param credentialsDto
   * @returns JWT
   * JWT: ヘッダー、ペイロード、エンコードしたヘッダー＋エンコードしたペイロード＋秘密鍵
   * の３要素をそれぞれエンコードして[.]で繋いだ文字列
   * https://jwt.io/ でデコード可能。
   */
  async signIn(
    credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = credentialsDto;

    const user = await this.userRepository.findOne({ where: { username } });

    if (user && (await this.isPasswordOK(password, user.password))) {
      // JWTのpayload。任意の情報を入れられる。
      const payload = { id: user.id, username: user.username };

      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    }

    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認してください',
    );
  }

  private async isPasswordOK(password, hashPassword): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
