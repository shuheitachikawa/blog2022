import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUrl()
  thumbnailUrl: string;
}
