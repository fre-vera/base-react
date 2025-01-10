import { useState } from 'react';
import { usePosts } from 'shared/stores';
import classes from './Creator.module.scss';

/**
 * @typedef {import('./types').PostForCreate} PostForCreate
 */

export const Creator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(
    /** @type {PostForCreate} */ ({ title: '', body: '' }),
  );

  const { creatPost, isPostCreating, postCreatingErrorMessage, postCount } = usePosts();

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ title: '', body: '', postId: 0, id: 0 });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.title && formData.body) {
      const formattedPost = {
        ...formData,
        postId: postCount + 1,
        id: postCount + 1,
      };
      creatPost(formattedPost);
      handleCloseModal();
    }
  };

  return (
    <div className={classes.creatorContainer}>
      <button className={classes.openButton} onClick={handleOpenModal}>
        Create Post
      </button>

      {isModalOpen && (
        <>
          {/* Затемнение фона */}
          <div className={classes.backdrop} onClick={handleCloseModal}></div>

          {/* Модальное окно */}
          <div className={classes.modal}>
            <button className={classes.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <form onSubmit={handleSubmit}>
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
