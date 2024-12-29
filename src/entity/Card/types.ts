import { PhotoFromAPI as PhotoDetails } from '../../shared/stores/usePhotos/types';
import { TodosFromAPI as TodoDetails } from '../../shared/stores/useTodos/types';
import { PostFromAPI as PostDetails } from '../../shared/stores/usePosts/types';

export type PhotoProps = {
  photo: PhotoDetails;
};

export type TodoProps = {
  todo: TodoDetails;
};

export type PostProps = {
  post: PostDetails;
};

export type Card = {
  Photo: (props: PhotoProps) => JSX.Element | null;
  Todo: (props: TodoProps) => JSX.Element | null;
  Post: (props: PostProps) => JSX.Element | null;
};
