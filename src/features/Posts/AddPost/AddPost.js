import { useState } from 'react';
import { usePosts } from 'shared/stores';
import classes from './AddPost.module.scss';

/**
 * @typedef {import('./types').PostFromAPI} PostFormData
 */

/**
 * @function AddPost
 * @returns {JSX.Element}
 */

export const AddPost = () => {
  // Инициализация состояния формы
  const [formData, setFormData] = useState(
    /** @type {PostFormData} */ ({ title: '', body: '' }),
  );

  // Получение методов и состояния из хука usePosts
  const { addPost, isPostCreating, postCreatingErrorMessage } = usePosts();

  // Обработчик изменения полей формы
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверяем, заполнены ли поля формы
    if (formData.title && formData.body) {
      addPost(formData); // Передаём только необходимые данные
    }
  };

  return (
    <form className={classes.addPostForm} onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      {/* Поле для ввода заголовка */}
      <div className={classes.field}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />
      </div>
      {/* Поле для ввода текста */}
      <div className={classes.field}>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Enter body"
          required
        />
      </div>
      {/* Кнопка отправки */}
      <button type="submit" disabled={isPostCreating}>
        {isPostCreating ? 'Adding...' : 'Add Post'}
      </button>
      {/* Сообщение об ошибке */}
      {postCreatingErrorMessage && (
        <p className={classes.error}>{postCreatingErrorMessage}</p>
      )}
    </form>
  );
};
