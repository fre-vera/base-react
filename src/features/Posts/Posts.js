import { useState } from 'react';
import classes from './Posts.module.scss';
import { Card } from 'entity';
import { AddPost } from './AddPost';

/**
 * @typedef {import('./types').PostsProps} PostsProps
 */

/**
 * @function Posts
 * @param {PostsProps} props
 * @returns {JSX.Element}
 */
export const Posts = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.postsContainer}>
      {/* Кнопка добавления поста */}
      <button className={classes.button} onClick={handleOpenModal}>
        Add Post
      </button>

      {/* Список постов */}
      <ul className={classes.posts}>
        {props.posts.map((post) => (
          <Card.Post key={post.id} post={post} />
        ))}
      </ul>

      {/* Модальное окно для добавления поста */}
      {isModalOpen && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <AddPost />
            <button
              className={classes.closeButton}
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
