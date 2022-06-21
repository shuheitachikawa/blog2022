import { PostStatus } from './post-status.enum';

export interface Post {
  id: string;
  title: string;
  content: string;
  status: PostStatus;
  thumbnailUrl: string;
}
