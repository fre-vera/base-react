import classes from './Preloader.module.scss';

/**
 * @typedef {import('./types').PreloaderProps} Props
 */

/**
 * @function Preloader
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Preloader = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return <div className={classes.loader}></div>;
};
