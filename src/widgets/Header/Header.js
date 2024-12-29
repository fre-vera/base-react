import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

/**
 * @function Header
 * @returns {JSX.Element}
 */

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <Link to="/" className={classes.logo}>
          Home
        </Link>
      </div>
      <nav className={classes.right}>
        <Link to="/photos" className={classes.navLink}>
          Photos
        </Link>
        <Link to="/todos" className={classes.navLink}>
          Todos
        </Link>
        <Link to="/posts" className={classes.navLink}>
          Posts
        </Link>
      </nav>
    </header>
  );
};
