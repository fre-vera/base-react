export type PostsDetails = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsProps = {
  posts: PostsDetails[];
};
