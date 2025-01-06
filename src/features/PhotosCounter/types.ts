// Тип для полного объекта поста из API
export type PostFromAPI = {
  postId: number;
  id: number;
  title: string;
  body: string;
};

// Тип для данных формы создания поста
export type PostFormData = Omit<PostFromAPI, 'postId' | 'id'>;
