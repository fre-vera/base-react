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

  const postsStore = usePosts();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: '', body: '', postId: 0, timestamp: Date.now() });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSuccess = async () => {
    try {
      await postsStore.getPosts(postsStore.postCount + 1);
      setNotification({ type: 'success', message: 'Post created successfully!' });
      setTimeout(() => setNotification({ type: '', message: '' }), 3000);
      closeModal();
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to update posts.' });
    }
  };

  const handlePostError = (error) => {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred.';
    setNotification({ type: 'error', message: errorMessage });
    setTimeout(() => setNotification({ type: '', message: '' }), 3000);
  };

  const handleCreator = async (event) => {
    event.preventDefault();
    const post = {
      postId: postsStore.postCount + 1,
      title: formData.title,
      body: formData.body,
      timestamp: Date.now(),
    };

    try {
      await postsStore.createPost(post);
      if (!postsStore.postCreatingErrorMessage) {
        handlePostSuccess();
      } else {
        throw new Error(postsStore.postCreatingErrorMessage);
      }
    } catch (error) {
      handlePostError(error);
    }
  };

  return (
    <div className={classes.creatorContainer}>
      <button className={classes.openButton} onClick={openModal}>
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
          <div className={classes.backdrop} onClick={closeModal}></div>
          <div className={classes.modal}>
            <button className={classes.closeButton} onClick={closeModal}>
              ×
            </button>
            <form onSubmit={handleCreator}>
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
                  disabled={postsStore.isPostCreating}
                  className={classes.addButton}
                >
                  {postsStore.isPostCreating ? 'Adding...' : 'Add Post'}
                </button>
                <button type="button" onClick={closeModal} className={classes.cancelButton}>
                  Cancel
                </button>
              </div>
              {postsStore.postCreatingErrorMessage && (
                <p className={classes.errorMessage}>{postsStore.postCreatingErrorMessage}</p>
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

