/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  postId: number;
  id: number;
  title: string;
  body: string;
  timestamp: number;
};

/**********************************************
  Post types
**********************************************/

export type PostForCreate = {
  postId: number;
  title: string;
  body: string;
  timestamp: number;
};

/**********************************************
  Store types
**********************************************/

export type PostStore = {
  /* Posts count state */
  postCount: number;
  setPostCount: (postCount: number) => void;

  /* state for getting posts */
  isPostsLoading: boolean;
  posts: PostFromAPI[] | [];
  postsErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

  /* state for getting post */
  isPostLoading: boolean;
  post: PostFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string | number) => void;
  resetPost: () => void;

  /* state for create post */
  isPostCreating: boolean;
  isPostCreated: boolean;
  postCreatingErrorMessage: string;
  createPost: (postData: PostForCreate) => void;
};

export type SetterCallback = (store: PostStore) => PostStore;
export type StoreCreator = (set: Function) => PostStore;
