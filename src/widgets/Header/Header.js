import { NavLink, useLocation } from 'react-router-dom';
import classes from './Header.module.scss';

/**
 * @function Header
 * @returns {JSX.Element}
 */

export const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleClick = (e, path) => {
    if (isActive(path)) {
      e.preventDefault();
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <NavLink
          to="/"
          onClick={(e) => handleClick(e, '/')}
          className={`${classes.logo} ${isActive('/') ? classes.active : ''}`}
          aria-disabled={isActive('/')}
        >
          Home
        </NavLink>
      </div>
      <nav className={classes.right}>
        <NavLink
          to="/photos"
          onClick={(e) => handleClick(e, '/photos')}
          className={`${classes.navLink} ${
            isActive('/photos') ? classes.active : ''
          }`}
          aria-disabled={isActive('/photos')}
        >
          Photos
        </NavLink>
        <NavLink
          to="/todos"
          onClick={(e) => handleClick(e, '/todos')}
          className={`${classes.navLink} ${
            isActive('/todos') ? classes.active : ''
          }`}
          aria-disabled={isActive('/todos')}
        >
          Todos
        </NavLink>
        <NavLink
          to="/posts"
          onClick={(e) => handleClick(e, '/posts')}
          className={`${classes.navLink} ${
            isActive('/posts') ? classes.active : ''
          }`}
          aria-disabled={isActive('/posts')}
        >
          Posts
        </NavLink>
      </nav>
    </header>
  );
};
