import { useState } from 'react';
import { usePosts } from 'shared/stores';
import classes from './Creator.module.scss';

/**
 * @typedef {import('./types').PostForCreate} PostForCreate
 */

/**
 * @function Creator
 * @returns {JSX.Element}
 */

export const Creator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    /** @type {PostForCreate} */ ({ title: '', body: '' }),
  );
  const [notification, setNotification] = useState({ type: '', message: '' });

  const {
    creatPost,
    isPostCreating,
    postCreatingErrorMessage,
    postCount,
    getPosts,
  } = usePosts();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: '',
      body: '',
      postId: 0,
      id: 0,
      timestamp: Date.now(),
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreator = async () => {
    const formattedPost = {
      postId: postCount + 1,
      id: postCount + 1,
      title: formData.title,
      body: formData.body,
      timestamp: Date.now(),
    };

    try {
      await creatPost(formattedPost);

      // Обновляем список постов и уведомляем пользователя
      await getPosts(postCount + 1);
      setNotification({ type: 'success', message: 'Post created successfully!' });

      // Сбросить уведомление через 5 секунд
      setTimeout(() => {
        setNotification({ type: '', message: '' });
      }, 5000);

      handleCloseModal();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setNotification({ type: 'error', message: errorMessage });
    }
  };

  return (
    <div className={classes.creatorContainer}>
      <button className={classes.openButton} onClick={handleOpenModal}>
        Create Post
      </button>

      {notification.message && (
        <div
          className={`${classes.notification} ${
            notification.type === 'success' ? classes.success : classes.error
          }`}
        >
          {notification.message}
        </div>
      )}

      {isModalOpen && (
        <>
          <div className={classes.backdrop} onClick={handleCloseModal}></div>

          <div className={classes.modal}>
            <button className={classes.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreator();
              }}
            >
              <h2>Create Post</h2>

              <div className={classes.field}>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className={classes.inputField}
                  placeholder="Enter title"
                  required
                />
              </div>

              <div className={classes.field}>
                <label htmlFor="body">Body</label>
                <textarea
                  id="body"
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  className={classes.textArea}
                  placeholder="Enter body"
                  required
                />
              </div>

              <div className={classes.buttonContainer}>
                <button
                  type="submit"
                  disabled={isPostCreating}
                  className={classes.addButton}
                >
                  {isPostCreating ? 'Adding...' : 'Add Post'}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className={classes.cancelButton}
                >
                  Cancel
                </button>
              </div>

              {postCreatingErrorMessage && (
                <p className={classes.errorMessage}>{postCreatingErrorMessage}</p>
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};
