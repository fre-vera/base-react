import { PostsDetails } from 'features/Posts/types';

export type PostsProps = {
  name?: string;
  posts: PostsDetails[];
  count: number;
  setCount: (count: number) => void;
}
