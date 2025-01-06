/**********************************************
  Response types
**********************************************/

export type PostFromAPI = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

/**********************************************
  Post types
**********************************************/

export type PostForCreate = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

/**********************************************
  Store types
**********************************************/

export type PostStore = {
  /* Posts count state */
  postCount: number;
  setPostCount: (postCount: number) => void;

  /* State for posts store */
  isPostsLoading: boolean;
  posts: PostFromAPI[] | [];
  postsErrorMessage: string;
  getPosts: (count: number) => void;
  resetPosts: () => void;

  /* State for post store */
  isPostLoading: boolean;
  post: PostFromAPI | null;
  postErrorMessage: string;
  getPostById: (postId: string | number) => void;
  resetPost: () => void;

  /* Add post functionality */
  isPostCreating: boolean;
  isPostCreated: boolean;
  postCreatingErrorMessage: string;
  addPost: (postData: PostFromAPI) => void;
};

export type SetterCallback = (store: PostStore) => PostStore;
export type StoreCreator = (set: Function) => PostStore;
